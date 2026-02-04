import React from 'react'
import HelloWorld from './components/HelloWorld'
import CharlyPicture from './components/CharlyPicture'
import Button from '@mui/material/Button';

export default function App() {
  return (
    <div>
      <h1> My Introduction </h1>
      <HelloWorld />
      <CharlyPicture />
      <Button variant="contained" onClick={() => console.log('Button clicked!')}>Click Me</Button>
    </div>
  )
}
