import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import Button from './yk-button'
const defaultProps = {
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
})