import { addDecorator } from '@storybook/react'
import React from 'react'
import "../src/styles/index.scss"

let style: React.CSSProperties = {
  textAlign: 'left'
}

let centerAlign = (fn) => <div style={style}>{fn()}</div>

addDecorator(centerAlign)