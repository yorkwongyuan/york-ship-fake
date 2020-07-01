import { storiesOf } from '@storybook/react'
import React from 'react'
import Input from './input'
let inputWithSize = () => (
  <>
    <Input size="lg" disabled={true} className="haha" icon="address-book"></Input>
  </>
)


storiesOf('input组件', module)
  .add('Input', inputWithSize)