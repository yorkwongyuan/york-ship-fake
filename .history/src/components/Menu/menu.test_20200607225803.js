import React from 'react'
import { RenderResult, render } from '@testing-library/react'
import { MenuProps } from './my-menu'

let testProps: MenuProps = {
  defaultIndex: 0,
  onSelect: jest.fn(),
  className: 'test'
}