
import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { withInfo } from '@storybook/addon-info'
import Button from './yk-button'

let btnWithSize = () => (
  <>
    <Button size="lg" onClick={action('large')}>large button</Button>
    <Button size="sm">sm button</Button>
  </>
)

// let btnWithType = () => (
//   <>
//     <Button btnType="danger">danger</Button>
//     <Button btnType="default">default</Button>
//     <Button btnType="disabled">disabled</Button>
//     <Button btnType="link">link</Button>
//     <Button btnType="primary">primary</Button>
//   </>
// )

let btnWithType = () => (
  <>
    <Button btnType="danger"></Button>
  </>
)

storiesOf('按钮组件', module)
  .addDecorator(withInfo)
  .addParameters({
    info: {
      text: `
      ### 说明文件
      ~~~ js
        let a = 'b'
      ~~~
      ### 这事
      ~~~ js
let b = 'k'
      ~~~
      `
    }
  })
  .add('不同尺寸的组件', btnWithSize, { info: { inline: true } })
  .add('不同type的组件', btnWithType, { info: { inline: true } })