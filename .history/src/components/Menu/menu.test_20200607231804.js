import React from 'react'
import { RenderResult, render, getElementError } from '@testing-library/react'
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

let generateMenus = (props: MenuProps) => {
  return (
    <>
      <Menu {...props}>
        <MenuItem index={0}>active</MenuItem>
        <MenuItem index={1}>disabled</MenuItem>
        <MenuItem index={3}>xyz</MenuItem>
      </Menu>
    </>
  )
}

let wrapper: RenderResult, menuElement: HTMLElement, activeElement: HTMLElement, disabledElement: HTMLElement

describe('test Menu and MenuItem props', () => {
  beforeEach(() => {
    wrapper = render(generateMenus(testProps))
    menuElement = wrapper.getByTestId('test-menu')
    activeElement = wrapper.getByText('active')
    disabledElement = wrapper.getByText('disabled')
  })
  it('should render correct menu and menuItem based on defaultProps', () => {
    expect(menuElement).toBeInTheDocument()
    expect(menuElement).toHaveClass('my-menu test')
  })
  it('click item should change active and call the right callback', () => {

  })
  it('should render vertical mode when mode is set to vertical', () => {

  })
})