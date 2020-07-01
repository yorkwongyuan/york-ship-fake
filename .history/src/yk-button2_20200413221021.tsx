import React, { useState, useEffect, useRef } from 'react';

const YKButton2: React.FC = () => {
  let [count, setCount] = useState(0)
  let num = useRef(0)
  let isUpdate = useRef(false)
  useEffect(() => {
    document.title = `点击次数为${count}`
  })



  function handleClick() {
    setTimeout(() => {
      alert(num.current)
    }, 3000)
  }
  return (
    <>
      <span>点击次数为{count}</span>
      <button onClick={() => { setCount(count + 1); num.current++ }}>点击</button>
      <button onClick={handleClick}>alert</button>
    </>
  )
}

export default YKButton2;