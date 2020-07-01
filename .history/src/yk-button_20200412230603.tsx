import React, { useState, useEffect } from 'react'

const ykButton: React.FC = () => {
  let [count, setCount] = useState(0)

  useEffect(() => {
    document.title = count
  }, [count])
}