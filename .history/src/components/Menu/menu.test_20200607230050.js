import React from 'react'
import { RenderResult, render } from '@testing-library/react'
import { MenuProps } from './my-menu'

let testProps: MenuProps = {
  defaultIndex: 0,
  onSelect: jest.fn(),
  className: 'test'
}

let testVerProps: MenuProps = {
  defaultIndex: 0,
  mode: 'vertical'
}

describe('test Menu and MenuItem props', () => {
  it('should render correct menu and menuItem based on defaultProps', () => {

  })
  it('click item should change active and call the right callback', () => {

  })
  it('should render vertical mode when mode is set to vertical', () => {

  })
})