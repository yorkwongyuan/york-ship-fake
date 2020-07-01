import { storiesOf } from '@storybook/react'
import React, { useState } from 'react'
import Input from './input'
let inputWithIcon = () => (
  <>
    <Input size="lg" disabled={false} className="icon" icon="bath"></Input>
  </>
)

let controlledInput = () => {
  const [value, setValue] = useState('')
  return (
    <>
      <Input ></Input>
    </>
  )
}

storiesOf('input组件', module)
  .add('Input', inputWithIcon)