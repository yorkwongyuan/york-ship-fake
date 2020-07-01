import { addDecorator } from '@storybook/react'
import React from 'react'
import "../src/styles/index.scss"


let styles: React.CSSProperties = {
  textAlign: 'center'
}

const textAlignDec = (fn) => <div style={styles}>{fn()}</div>

addDecorator(textAlignDec)