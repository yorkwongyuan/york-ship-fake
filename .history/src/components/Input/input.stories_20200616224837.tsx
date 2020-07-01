import React from 'react'
import { storiesOf } from '@storybook/react'
import Input from './input'
let inputWithSize = () => (<><input size="lg"></input></>)


storiesOf('组件了', module)
  .add('Input', inputWithSize)