import { useState } from 'react'
import './App.css'

// components
import NavBar from './componets/NavBar'

// hooks
import useMousePosition from './hooks/useMouseFollower'

function App() {
  const [enable, setEnable] = useState(false)
  const position = useMousePosition(enable)

  return (
    <>
      <NavBar enable={enable} setEnable={setEnable} />
      <main>
        <div
          hidden={!enable}
          style={{
            position: 'absolute',
            backgroundColor: '#09f',
            borderRadius: '50%',
            opacity: 0.8,
            pointerEvents: 'none',
            left: -20,
            top: -20,
            width: 40,
            height: 40,
            transform: `translate(${position.x}px, ${position.y}px)`
          }}
        />
      </main>
    </>
  )
}

export default App
