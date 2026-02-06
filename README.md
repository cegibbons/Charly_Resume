# Charly's Personal Space

Use the `HelloWorld` component by importing it in your React app:

```jsx
import HelloWorld from './src/components/HelloWorld';

function App() {
	return (
		<div>
			<HelloWorld />
		</div>
	);
}

export default App;
```

## Local setup and running the app

### Prerequisites

- Node.js (v18+ recommended)
- npm (bundled with Node)

### 1) Clone the repository

```bash
git clone <your-repo-url>
cd Charly_Resume
```

### 2) Install dependencies

```bash
npm install
```

### 3) Start the development server

```bash
npm run dev
```

Then open the dev server URL shown in your terminal (usually http://localhost:5173).

### 4) Run tests

```bash
npm run test
```

### 5) View the test report

After tests finish, open the generated report:

- [reports/test-report.html](reports/test-report.html)

### 6) Build for production (optional)

```bash
npm run build
```

### 7) Preview the production build (optional)

```bash
npm run preview
```