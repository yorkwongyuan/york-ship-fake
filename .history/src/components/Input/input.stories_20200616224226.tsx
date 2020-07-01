import React from 'react'
import { storiesOf } from '@storybook/react'
import Input from './input'
let inputWithSize = () => (<><Input size="lg"></Input></>)


storiesOf('组件了', module)
  .add('Input', inputWithSize)