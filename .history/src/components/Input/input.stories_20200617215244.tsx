import { storiesOf } from '@storybook/react'
import React, { useState, ChangeEvent } from 'react'
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
      <Input onChange={(e as ChangeEvent) => </Input>
    </>
  )
}

storiesOf('input组件', module)
  .add('Input', inputWithIcon)