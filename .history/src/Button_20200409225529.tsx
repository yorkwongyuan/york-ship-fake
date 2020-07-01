import React, { useState } from 'react'
interface Count {
  name: string;
}
const Button: React.FC<Count> = (params) => {
  let [count, setCount] = useState(0)
  let [obj, setObj] = useState({ like: 0, on: true })
  return (
    <>
      <button onClick={() => setCount(count + 1)}>
        {params.name}{count}
      </button>
      <button onClick={() => setObj({ like: obj.like++, on: !obj.on })}>
        {obj.on ? 'ON' : 'OFF'}
      </button>
    </>
  )
}

export default Button;