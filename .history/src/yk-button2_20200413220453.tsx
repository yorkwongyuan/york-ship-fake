import React, { useState } from 'react';

const YKButton2: React.FC = () => {
  let [count, setCount] = useState(0)
  return (
    <>
      <button onClick={() => setCount(count++)}>点击</button>
    </>
  )
}