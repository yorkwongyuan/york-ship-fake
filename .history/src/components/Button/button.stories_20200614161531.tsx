
import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import Button from './yk-button'

let defaultButton = () => (
  <Button onClick={action('哈哈')} btnType="primary">按钮</Button>
)
let btnWithSize = () => (
  <>
    <Button size="lg">large button</Button>
    <Button size="sm">large button</Button>
  </>
)
storiesOf('按钮组件', module)
  .add('with text', defaultButton)
  .add('不同尺寸的组件', btnWithSize)