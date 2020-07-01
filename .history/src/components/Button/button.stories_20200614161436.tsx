
import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import Button from './yk-button'

let defaultButton = () => (
  <Button onClick={action('哈哈')} btnType="primary">按钮</Button>
)
let btnWithSize = () => (
  <Button size="lg">large button</Button>
)
storiesOf('Button COm', module)
  .add('with text', defaultButton)
  .add('with large btn', btnWithSize)