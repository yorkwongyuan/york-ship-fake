import React, { useState, useEffect, useRef } from 'react'

const YKButton = () => {
  let [count, setCount] = useState(0)
  let likeRef = useRef(0)
  useEffect(() => {
    document.title = `点击次数为:${count}`
  }, [count])
  function handleClick() {
    setTimeout(() => {
      alert(count)
    }, 3000)
  }
  return (
    <>
      <div>
        <button onClick={handleClick}>alert</button>
        <button onClick={() => setCount(count++); likeRef++}>按钮</button>
    </div>
    </>
  )
}

export default YKButton