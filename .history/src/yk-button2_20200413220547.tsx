import React, { useState, useEffect } from 'react';

const YKButton2: React.FC = () => {
  let [count, setCount] = useState(0)
  useEffect(() => {
    document.title = count
  })
  return (
    <>
      <span>点击次数为{count}</span>
      <button onClick={() => setCount(count++)}>点击</button>
    </>
  )
}

export default YKButton2;