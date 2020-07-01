import React, { useEffect, useState } from 'react'

let useMousePosition: React.FC = () => {
  let [position, setPosition] = useState({ x: 0, y: 0 })
  const func = function (e: MouseEvent) {
    setPosition({ x: e.clientX, y: e.clientY })
  }
  useEffect(() => {
    document.addEventListener('mousemove', func)
  })
}