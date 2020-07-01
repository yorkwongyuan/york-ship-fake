import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import Button, { ButtonProps, ButtonSize, ButtonType } from './yk-button'

// 添加点击方法
const defaultProps = {
  onClick: jest.fn()
}

// 属性
const testProps: ButtonProps = {
  btnType: ButtonType.Primary,
  size: ButtonSize.Large,
  className: 'custom'
}

// disabled属性
const disabledProps: ButtonProps = {
  disabled: true,
  onClick: jest.fn()
}
describe('test button', () => {
  it('should render the correct default button', () => {
    const wrapper = render(<Button {...defaultProps}>Nice</Button>)
    const element = wrapper.getByText('Nice')
    expect(element.tagName).toEqual('BUTTON')
    expect(element).toHaveClass('btn btn-default')
    fireEvent.click(element)
    expect(defaultProps.onClick).toBeCalled()
  })
  // 测试包含这些属性
  it('should render correct component base on different props', () => {
    const wrapper = render(<Button {...testProps}>testBtn</Button>)
    const element = wrapper.getByText('testBtn')
    // 断言包含这些类名
    expect(element).toHaveClass('btn-primary btn-lg custom')
  })

  it('should render a link,when btnType equals link and href is provided', () => {
    const wrapper = render(<Button btnType={ButtonType.Link} href="http://hehe">Link</Button>)
    const element = wrapper.getByText('Link')
    expect(element.tagName).toEqual('A')
    expect(element).toHaveClass('btn btn-link')
  })

  it('should render disabled button when disabled set to be true', () => {
    const wrapper = render(<Button {...disabledProps}>disabledBtn</Button>)
    const element = wrapper.getByText('disabledBtn') as HTMLButtonElement;
    expect(element.disabled).toBeTruthy()
    fireEvent.click(element)
    expect(disabledProps.onClick).not.toBeCalled()
  })
})