
import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { withInfo } from '@storybook/addon-info'
import Button from './yk-button'

/**
 * # 尺寸按钮
 */
let btnWithSize = () => (
  <>
    <Button size="lg" onClick={action('large')}>large button</Button>
    <Button size="sm">sm button</Button>
  </>
)

let btnWithType = () => (
  <>
    <Button btnType="danger" onClick={action('点击')}>danger按键</Button>
  </>
)

storiesOf('按钮组件', module)
  .addDecorator(withInfo)

  .add('Button', btnWithSize, { info: { inline: true } })
  .add('不同type的组件', btnWithType, { info: { inline: true } })