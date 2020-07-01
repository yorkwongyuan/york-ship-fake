import React, { useEffect, useState } from 'react'

const MouseTracker: React.FC = () => {
  let [position, setPosition] = useState({ x: 0, y: 0 })
  return (
    <div>
      {`x is${position.x},y is ${position.y}`}
    </div>
  )
}