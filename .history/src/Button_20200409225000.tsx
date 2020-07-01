import React, { useState } from 'react'
interface Count {
  times: number;
}
const Button: React.FC<Count> = (params) => {
  let [count, setCount] = useState(0)
  return (
    <button onClick={() => setCount(count + 1)}>
      {params.times}{count}
    </button>
  )
}

export default Button;