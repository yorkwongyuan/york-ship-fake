import { storiesOf } from '@storybook/react'
import React from 'react'
import Input from './input'
let inputWithSize = () => (<><Input size="lg" disabled></Input></>)


storiesOf('组件了', module)
  .add('Input', inputWithSize)