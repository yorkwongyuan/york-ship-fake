import React from 'react'
import { storiesOf } from '@storybook/react'
import Menu from './my-menu'
import MenuItem from './my-menu-item'
let MenuWithSize = () => (
  <Menu mode="vertical">
    <MenuItem>1</MenuItem>
    <MenuItem>2</MenuItem>
  </Menu>
)

let MenuWithType = () => (
  <Menu mode="horizon">

  </Menu>
)


storiesOf('Menu组件的使用', module)
  .add('Menu', MenuWithType)
