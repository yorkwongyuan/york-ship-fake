import React from 'react'
import Icon from './icon'
import { storiesOf } from '@storybook/react'

let IconDefault = () => (<Icon icon="bath" theme="danger" />)

storiesOf('Icon组件', module)
  .add('Icon', IconDefault)