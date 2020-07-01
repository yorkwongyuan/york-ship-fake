import React from 'react'
import { storiesOf } from '@stroybook/react'
import Menu from './my-menu'
import MenuItem from './my-menu-item'
let MenuWithSize = () => (
  <Menu mode="horizon">
    <MenuItem>123</MenuItem>
  </Menu>
)

storiesOf('Menu')
  .add('menu', MenuWithSize)
