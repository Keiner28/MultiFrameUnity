import { useEffect, useState } from 'react'

const useMouseFollower = (enable: boolean) => {
  const [position, setPosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY })
    }

    if (enable) {
      window.addEventListener('mousemove', handleMove)
    }

    return () => {
      window.removeEventListener('mousemove', handleMove)
    }
  }, [enable])

  return position
}

export default useMouseFollower
