import React from 'react'
import { RenderResult, render } from '@testing-library/react'
import Menu, { MenuProps } from './my-menu'
import MenuItem from './my-menu-item'
let testProps: MenuProps = {
  defaultIndex: 0,
  onSelect: jest.fn(),
  className: 'test'
}

let testVerProps: MenuProps = {
  defaultIndex: 0,
  mode: 'vertical'
}

let generateMenus = () => {
  return (
    <>
      <MyMenu onSelect={(index) => alert(index)}>
        <MenuItem index={0}> 0</MenuItem>
        <MenuItem index={1}> 2</MenuItem>
        <MenuItem index={3}> 3</MenuItem>
      </MyMenu>
    </>
  )
}

describe('test Menu and MenuItem props', () => {
  it('should render correct menu and menuItem based on defaultProps', () => {

  })
  it('click item should change active and call the right callback', () => {

  })
  it('should render vertical mode when mode is set to vertical', () => {

  })
})