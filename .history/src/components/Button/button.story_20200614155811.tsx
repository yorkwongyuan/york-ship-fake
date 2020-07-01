
import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import Button from './yk-button'

let defaultButton = () => (
  <Button onClick={action('哈哈')}>按钮</Button>
)

storiesOf('Button', module)
  .add('with text', defaultButton)