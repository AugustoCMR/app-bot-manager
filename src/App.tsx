import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import LoginModal from './components/LoginModal'

function App() {

  return (
    <div className='bg-gradient-to-b from-zinc-900 via-zinc-800 to-zinc-700 w-screen h-screen'>
      <LoginModal></LoginModal>
    </div>
  )
}

export default App
