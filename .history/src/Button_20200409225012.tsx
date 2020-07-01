import React, { useState } from 'react'
interface Count {
  name: string;
}
const Button: React.FC<Count> = (params) => {
  let [count, setCount] = useState(0)
  return (
    <button onClick={() => setCount(count + 1)}>
      {params.name}{count}
    </button>
  )
}

export default Button;