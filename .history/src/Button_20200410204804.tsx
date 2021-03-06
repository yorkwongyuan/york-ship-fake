import React, { useState, useEffect } from 'react'
interface Count {
  name: string;
}
const Button: React.FC<Count> = (params) => {
  let [count, setCount] = useState(0)
  let [obj, setObj] = useState({ like: 0, on: false })
  useEffect(() => {
    document.title = `点击了${count}`
  })
  return (
    <>
      <button onClick={() => setCount(count + 1)}>
        {params.name}{count}
      </button>
      <button>

      </button>
    </>
  )
}

export default Button;