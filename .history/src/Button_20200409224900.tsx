import React, { useState } from 'react'

const Button: React.FC = () => {
  let [count, setCount] = useState(0)
  return (
    <button onClick={() => setCount(count + 1)}>
      {count}
    </button>
  )
}

export default Button;