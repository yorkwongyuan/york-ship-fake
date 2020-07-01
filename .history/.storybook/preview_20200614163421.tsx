import { addDecorator } from '@storybook/react'
// import { withInfo } from '@storybook/addon-info'
import React from 'react'
import "../src/styles/index.scss"
// addDecorator(withInfo)

let styles: React.CSSProperties = {
  textAlign: 'center'
}

const textAlignDec = (fn) => <div style={styles}>{fn()}</div>

addDecorator(textAlignDec)