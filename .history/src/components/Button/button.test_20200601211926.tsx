import React from 'react'
import { render } from '@testing-library/react'
import Button from './yk-button'

describe('test button', () => {
  it('should render the correct default button', () => {
    const wrapper = render(<Button>Nice</Button>)
    const element = wrapper.getByText('Nice')
    expect(element.tagName).toEqual('BUTTON')
  })
})