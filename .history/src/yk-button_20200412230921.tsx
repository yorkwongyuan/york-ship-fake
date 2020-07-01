import React, { useState, useEffect } from 'react'

const YKButton = () => {
  let [count, setCount] = useState(0)

  useEffect(() => {
    document.title = `点击次数为:${count}`
  }, [count])

  return (
    <>
      <div>
        <button onClick={() => setCount(count++)}>按钮</button>
      </div>
    </>
  )
}

export default YKButton