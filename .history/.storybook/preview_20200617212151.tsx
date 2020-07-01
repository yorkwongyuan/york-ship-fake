import { addDecorator, addParameters } from '@storybook/react'
import React from 'react'
import { withInfo } from '@storybook/addon-info'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import "../src/styles/index.scss"
library.add(fas)
let style: React.CSSProperties = {
  padding: '16px'
}
let styleDeco = (fn) => (
  <div style={style}>
    <h3>组件演示</h3>
    {fn()}
  </div>
)

addDecorator(styleDeco)
addDecorator(withInfo)
addParameters({
  info: {
    inline: true,
    header: false
  }
})
