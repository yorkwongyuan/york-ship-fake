import { addDecorator } from '@storybook/react'
import React from 'react'
import { withInfo } from '@storybook/addon-info'
import "../src/styles/index.scss"

let style: React.CSSProperties = {
  padding: '16px'
}
let styleDeco = (fn) => (
  <div style={style}>

  </div>)

addDecorator(withInfo)
