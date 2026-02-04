import fs from 'fs'
import path from 'path'

const candidates = [
  path.resolve(process.cwd(), 'node_modules/.vitest/results.json'),
  path.resolve(process.cwd(), 'node/node_modules/.vitest/results.json'),
  path.resolve(process.cwd(), '.vitest/results.json'),
]

function findResultsFile() {
  for (const p of candidates) {
    if (fs.existsSync(p)) return p
  }
  return null
}

const resultsPath = findResultsFile()
if (!resultsPath) {
  console.error('Vitest results.json not found in expected locations:')
  console.error(candidates.join('\n'))
  process.exit(1)
}

const raw = fs.readFileSync(resultsPath, 'utf-8')
let data
try {
  data = JSON.parse(raw)
} catch (e) {
  console.error('Failed to parse results.json:', e.message)
  process.exit(1)
}

const files = []
if (Array.isArray(data.results)) {
  for (const entry of data.results) {
    // entry can be [file, meta] or other shapes; handle defensively
    if (!Array.isArray(entry) || entry.length < 2) continue
    const file = String(entry[0])
    const meta = entry[1] || {}

    const fileObj = {
      file,
      duration: meta.duration ?? '-',
      failed: !!meta.failed,
      tests: []
    }

    // Vitest may include a `tests` array with detailed test results
    if (Array.isArray(meta.tests) && meta.tests.length) {
      for (const t of meta.tests) {
        // t typically has {title, duration, error, state}
        fileObj.tests.push({
          title: t.title || t.name || 'unknown',
          duration: t.duration ?? '-',
          state: t.state || (t.failed ? 'failed' : 'passed') || 'unknown',
          error: t.error || null,
          location: t.location || null
        })
      }
    }

    // Some versions use `suites` or nested arrays; try to extract tests from meta
    if (!fileObj.tests.length) {
      // attempt to find any nested test-like objects
      for (const key of ['suites', 'results', 'children']) {
        if (Array.isArray(meta[key])) {
          for (const item of meta[key]) {
            if (item && item.title && item.state) {
              fileObj.tests.push({
                title: item.title,
                duration: item.duration ?? '-',
                state: item.state,
                error: item.error || null,
                location: item.location || null
              })
            } else if (item && Array.isArray(item.tests)) {
              for (const tt of item.tests) {
                fileObj.tests.push({
                  title: tt.title || tt.name || 'unknown',
                  duration: tt.duration ?? '-',
                  state: tt.state || (tt.failed ? 'failed' : 'passed') || 'unknown',
                  error: tt.error || null,
                  location: tt.location || null
                })
              }
            }
          }
        }
      }
    }

    files.push(fileObj)
  }
}

const outDir = path.resolve(process.cwd(), 'reports')
if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true })
const outFile = path.join(outDir, 'test-report.html')

const passed = files.reduce((acc, f) => acc + (f.tests.length ? f.tests.filter(t => t.state === 'passed').length : (f.failed ? 0 : 1)), 0)
const failed = files.reduce((acc, f) => acc + (f.tests.length ? f.tests.filter(t => t.state !== 'passed').length : (f.failed ? 1 : 0)), 0)
const now = new Date().toISOString()
function escapeHtml(s) {
  return String(s)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
}

const html = `<!doctype html>
<html>
<head>
  <meta charset="utf-8" />
  <title>Vitest Report</title>
  <style>
    * { box-sizing: border-box }
    body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; padding: 2rem; background: #f9f9f9 }
    h1 { color: #333; border-bottom: 2px solid #0066cc; padding-bottom: 0.5rem }
    h2 { color: #0066cc; margin-top: 1.5rem; font-size: 1.2rem }
    .summary { background: #fff; padding: 1rem; border-radius: 4px; margin-bottom: 1rem; box-shadow: 0 1px 3px rgba(0,0,0,0.1) }
    .pass { color: #28a745; font-weight: bold }
    .fail { color: #dc3545; font-weight: bold }
    .file { background: #fff; padding: 1rem; margin-top: 1rem; border-radius: 4px; box-shadow: 0 1px 3px rgba(0,0,0,0.1) }
    .file-header { display: flex; justify-content: space-between; align-items: center }
    .tests { list-style: none; margin: 0.5rem 0; padding: 0 }
    .test { padding: 0.5rem 0.75rem; border-left: 3px solid #ddd; margin: 0.25rem 0 }
    .test.passed { border-left-color: #28a745 }
    .test.failed { border-left-color: #dc3545; background: #fff5f5 }
    .test-info { display: flex; justify-content: space-between; align-items: center; gap: 1rem }
    .test-title { flex: 1 }
    .test-status { white-space: nowrap; font-size: 0.85rem }
    .test-duration { color: #666; font-size: 0.85rem }
    button.toggle-btn { background: #f0f0f0; border: 1px solid #ccc; padding: 0.4rem 0.8rem; border-radius: 3px; cursor: pointer; display: none }
    button.toggle-btn:hover { background: #e0e0e0 }
    pre { background: #f5f5f5; padding: 1rem; border-radius: 3px; overflow: auto; font-size: 0.85rem; color: #333 }
    details { margin: 0.5rem 0; }
    summary { cursor: pointer; color: #0066cc; padding: 0.25rem; }
    summary:hover { text-decoration: underline }
    .location { color: #666; font-size: 0.85rem; margin-top: 0.25rem }
  </style>
  <script>
    // Toggle functionality disabled
  </script>
</head>
<body>
  <h1>Vitest Test Report</h1>
  <div class="summary">
    <p>Generated: ${now}</p>
    <p>Total Files: <strong>${files.length}</strong> — <span class="pass">✓ Passed: ${passed}</span> — <span class="fail">✗ Failed: ${failed}</span></p>
  </div>

  ${files.map(f => {
    const filePassed = f.tests.length ? f.tests.filter(t => t.state === 'passed').length : (f.failed ? 0 : 1)
    const fileFailed = f.tests.length ? f.tests.filter(t => t.state !== 'passed').length : (f.failed ? 1 : 0)
    const status = f.tests.length ? (f.tests.some(t => t.state !== 'passed') ? 'FAILED' : 'PASSED') : (f.failed ? 'FAILED' : 'PASSED')
    return `
    <div class="file">
      <div class="file-header">
        <div>
          <h2>${f.file}</h2>
          <p style="margin: 0.25rem 0; color: #666">Duration: ${f.duration}ms | Status: <strong class="${status==='PASSED'?'pass':'fail'}">${status}</strong> (${filePassed} passed, ${fileFailed} failed)</p>
        </div>
      </div>
      ${f.tests.length ? `<ul class="tests">${f.tests.map(t => `
        <li class="test ${t.state === 'passed' ? 'passed' : 'failed'}">
          <div class="test-info">
            <div class="test-title"><strong>${escapeHtml(t.title)}</strong></div>
            <div class="test-status">
              <span class="${t.state==='passed'?'pass':'fail'}">${escapeHtml(String(t.state).toUpperCase())}</span>
              <span class="test-duration">${t.duration}ms</span>
            </div>
          </div>
          ${t.location ? `<div class="location">${escapeHtml(t.location)}</div>` : ''}
          ${t.error ? `<details><summary>📋 Error Details</summary><pre>${escapeHtml(String(t.error.stack || t.error.message || t.error))}</pre></details>` : ''}
        </li>
      `).join('')}</ul>` : ''}
    </div>`
  }).join('')}

</body>
</html>`

fs.writeFileSync(outFile, html, 'utf-8')
console.log('Wrote HTML report to', outFile)
