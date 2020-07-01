import React from 'react'
import { storiesOf } from '@storybook/react'
import Menu from './my-menu'
import MenuItem from './my-menu-item'

let MenuWithType = () => (
  <Menu mode="horizon">

  </Menu>
)


storiesOf('Menu组件的使用', module)
  .add('Menu', MenuWithType)
