import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import Button from './yk-button'

const defaultBtn = () => <Button onClick={action('clicked')}>123</Button>

storiesOf('这就是一个btn组件', module)
  .add('btn', defaultBtn)