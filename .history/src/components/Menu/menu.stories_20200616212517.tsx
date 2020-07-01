import React from 'react'
import { storiesOf } from '@storybook/react'
import Menu from './my-menu'
import MenuItem from './my-menu-item'
let MenuWithSize = () => (
  <Menu mode="horizon">
    <MenuItem>123</MenuItem>
  </Menu>
)

storiesOf('Menu', module)
  .add('menu', MenuWithSize)
