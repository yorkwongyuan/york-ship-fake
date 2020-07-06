import { useEffect, useState } from 'react'

let useMousePosition = () => {
  let [position, setPosition] = useState({ x: 0, y: 0 })
  const func = function (e: MouseEvent) {
    setPosition({ x: e.clientX, y: e.clientY })
  }

  useEffect(() => {
    document.addEventListener('mousemove', func)
    return () => {
      document.removeEventListener('mousemove', func)
    }
  }, [])

  return position
}

export default useMousePosition