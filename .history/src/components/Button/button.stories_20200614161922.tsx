
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
    <Button size="sm">sm button</Button>
  </>
)

let btnWithType = () => (
  <>
    <Button btnType="danger">danger</Button>
    <Button btnType="default">default</Button>
    <Button btnType="disabled">disabled</Button>
    <Button btnType="link">link</Button>
  </>
)
storiesOf('按钮组件', module)
  .add('with text', defaultButton)
  .add('不同尺寸的组件', btnWithSize)
  .add('不同type的组件', btnWithType)