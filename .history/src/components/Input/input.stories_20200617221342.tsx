import { storiesOf } from '@storybook/react'
import React, { useState, ChangeEvent } from 'react'
import Input from './input'
let inputWithIcon = () => (
  <>
    <Input size="lg" disabled={false} className="icon" icon="bath"></Input>
  </>
)

const ControlledInput = () => {
  const [value, setValue] = useState()
  return <Input value={value} defaultValue={value} onChange={(e) => { setValue(e.target.value) }} />
}

let controlledInput = () => {
  const [value, setValue] = useState()
  return <Input value={value} onChange={(e) => { setValue(e.target.value) }} defaultValue={value}></Input>
}

storiesOf('input组件', module)
  .add('Input', inputWithIcon)
  .add('inputControlled', controlledInput)