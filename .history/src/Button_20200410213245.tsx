import React, { useState, useEffect } from 'react'
interface Count {
  name: string;
}
const Button: React.FC<Count> = (params) => {
  let [count, setCount] = useState(0)
  let [obj, setObj] = useState({ like: 0, on: false })
  useEffect(() => {
    console.log('document is changed')
    document.title = `点击了${count}`
  })
  return (
    <>
      <button onClick={() => setCount(count + 1)}>
        count按钮
      </button>
      <button onClick={() => setObj({ like: obj.like + 1, on: !obj.on })}>
        点赞按钮
      </button>
      <span>
        {obj.on ? 'ON' : 'OFF'}
      </span>
    </>
  )
}

export default Button;