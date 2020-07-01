import { storiesOf } from '@storybook/react'
import React from 'react'
import Input from './input'
let inputWithSize = () => (<Input size="lg"></Input>)


storiesOf('input组件', module)
  .add('Input', inputWithSize)