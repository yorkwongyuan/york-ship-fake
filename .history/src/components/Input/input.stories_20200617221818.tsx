import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import React, { useState } from 'react'
import Input from './input'

let DefaultInput = () => {
  return <Input size="lg" />
}

let inputWithIcon = () => (
  <>
    <Input size="lg" disabled={false} className="icon" icon="bath"></Input>
  </>
)

// 注意这里一定要大写开头
let ControlledInput = () => {
  const [value, setValue] = useState()
  return <Input value={value} defaultValue={value} onChange={(e) => { setValue(e.target.value) }} />
}

storiesOf('input组件', module)
  .add('Input', DefaultInput)
  .add('inputWithIcon', inputWithIcon)
  .add('inputControlled', ControlledInput)