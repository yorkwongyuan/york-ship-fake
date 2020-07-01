import { storiesOf } from '@storybook/react'
import React from 'react'
import Input from './input'
let inputWithIcon = () => (
  <>
    <Input size="lg" disabled={true} className="icon" icon="bath"></Input>
  </>
)


storiesOf('input组件', module)
  .add('Input', inputWithIcon)