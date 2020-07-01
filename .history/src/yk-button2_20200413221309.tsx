import React, { useState, useEffect, useRef } from 'react';

const YKButton2: React.FC = () => {
  let [count, setCount] = useState(0)
  let num = useRef(0)
  let isUpdate = useRef(false)
  let inputRef = useRef<HTMLInputElement>(null)
  useEffect(() => {
    document.title = `点击次数为${count}`
  })

  useEffect(() => {
    if (isUpdate.current) {
      console.log('this is update')
    } else {
      isUpdate.current = true
      console.log('this is mounted')
    }
  })

  useEffect(() => {
    if (inputRef && inputRef.current) {
      inputRef.current.focus()
    }
  })


  function handleClick() {
    setTimeout(() => {
      alert(num.current)
    }, 3000)
  }
  return (
    <>
      <input type="text" ref={inputRef} />
      <span>点击次数为{count}</span>
      <button onClick={() => { setCount(count + 1); num.current++ }}>点击</button>
      <button onClick={handleClick}>alert</button>
    </>
  )
}

export default YKButton2;