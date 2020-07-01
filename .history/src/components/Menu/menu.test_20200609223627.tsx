import React from 'react'
import { RenderResult, render, fireEvent, cleanup, wait } from '@testing-library/react'
import Menu, { MenuProps } from './my-menu'
import MenuItem from './my-menu-item'
import SubMenu from './my-submenu'
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
        <SubMenu title="title">
          <MenuItem>drop1</MenuItem>
        </SubMenu>
      </Menu>
    </>
  )
}

let createCssFile = () => {
  let cssFile: string = `
  .my-submenu {
    display: none;
  }

  .my-submenu.is-open {
    display: inline-block;
  }
  `
  const style = document.createElement('style')
  style.type = 'text/css'
  style.innerHTML = cssFile
  return style
}
let wrapper: RenderResult, menuElement: HTMLElement, activeElement: HTMLElement, disabledElement: HTMLElement

describe('test Menu and MenuItem props', () => {
  beforeEach(() => {
    wrapper = render(generateMenus(testProps))
    menuElement = wrapper.getByTestId('test-menu')
    activeElement = wrapper.getByText('active')
    disabledElement = wrapper.getByText('disabled')
    wrapper.container.append(createCssFile())
  })
  it('should render correct menu and menuItem based on defaultProps', () => {
    expect(menuElement).toBeInTheDocument()
    expect(menuElement).toHaveClass('test my-menu')
    expect(menuElement.querySelectorAll(':scope>li').length).toEqual(4)
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

  it('should show dropdown items when hover on submenus', async () => {
    // queryByText 和 getByText不同的是,前者可以为空
    let drop = wrapper.queryByText('drop1')
    expect(drop).not.toBeVisible()
    let title = wrapper.getByText('title')
    fireEvent.mouseEnter(title)
    await wait(() => {
      expect(drop).toBeVisible()
    })
    fireEvent.click(wrapper.getByText('drop1'))
    expect(testProps.onSelect).toBeCalledWith('3-0')
    fireEvent.mouseLeave(title)
    await wait(() => {
      expect(title).not.toBeVisible()
    })
  })
})