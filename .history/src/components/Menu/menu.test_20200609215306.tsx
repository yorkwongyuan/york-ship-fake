import React from 'react'
import { RenderResult, render, fireEvent, cleanup } from '@testing-library/react'
import Menu, { MenuProps } from './my-menu'
import MenuItem from './my-menu-item'

let testProps: MenuProps = {
  defaultIndex: '0',
  onSelect: jest.fn(),
  className: 'test'
}

let testVerProps: MenuProps = {
  defaultIndex: '0',
  mode: 'vertical'
}

let generateMenus = (props: MenuProps) => {
  return (
    <>
      <Menu {...props}>
        <MenuItem>active</MenuItem>
        <MenuItem disabled>disabled</MenuItem>
        <MenuItem>xyz</MenuItem>
      </Menu>
    </>
  )
}

let wrapper: RenderResult, menuElement: HTMLElement, activeElement: HTMLElement, disabledElement: HTMLElement

describe('test Menu and MenuItem props', () => {
  beforeEach(() => {
    wrapper = render(generateMenus(testProps))
    menuElement = wrapper.getByTestId('test-menu')
    // wrapper = render(generateMenus(testProps))
    // menuElement = wrapper.getByTestId('test-menu')
    // activeElement = wrapper.getByText('active')
    // disabledElement = wrapper.getByText('disabled')
  })
  it('should render correct menu and menuItem based on defaultProps', () => {
    expect(menuElement).toBeInTheDocument()
    expect(menuElement).toHaveClass('my-menu test')
    expect(menuElement.getElementsByTagName('li').length).toEqual(3)
    expect(activeElement).toHaveClass('is-active my-menu-item')
  })
  it('click item should change active and call the right callback', () => {
    const thirdElement = wrapper.getByText('xyz')
    fireEvent.click(thirdElement)
    expect(thirdElement).toHaveClass('is-active')
    expect(activeElement).not.toHaveClass('is-active')
    expect(testProps.onSelect).toBeCalledWith('2')
    fireEvent.click(disabledElement)
    expect(disabledElement).not.toHaveClass('is-active')

  })
  it('should render vertical mode when mode is set to vertical', () => {
    cleanup()
    const wrapper = render(generateMenus(testVerProps))
    const menuElement = wrapper.getByTestId('test-menu')
    expect(menuElement).toHaveClass('is-vertical')

  })
})