import React, { useEffect, useState } from 'react'

const MouseTracker: React.FC = () => {
  let [position, setPosition] = useState({ x: 0, y: 0 })
  useEffect(() => {
    function MouseTrackerEvent(e: MouseEvent) {
      setPosition({ x: e.clientX, y: e.clientY })
    }
    document.addEventListener('click')
  })
  return (
    <div>
      {`x is${position.x},y is ${position.y}`}
    </div>
  )
}