import React, { useState, useEffect } from 'react';

const YKButton2: React.FC = () => {
  let [count, setCount] = useState(0)
  useEffect(() => {
    document.title = `点击次数为${count}`
  })

  function handleClick() {
    alert(count)
  }
  return (
    <>
      <span>点击次数为{count}</span>
      <button onClick={() => setCount(count++)}>点击</button>
      <button onClick={handleClick}>alert</button>
    </>
  )
}

export default YKButton2;