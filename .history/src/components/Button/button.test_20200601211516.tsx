import React from 'react'
import { render } from '@testing-library/react'
import Button from './yk-button'
test('our first react test case', () => {
  const wrapper = render(<Button>nice</Button>)
  const element = wrapper.queryByText('nice')
  expect(element).toBeTruthy()
  expect(element).toBeInTheDocument()
})

describe('test button', () => {
  it('should render the correct default button', () => {
    const wrapper = render(<Button>Nice</Button>)
    const element = wrapper.queryByText('Nice')
    expect(element).toBeTruthy()
  })
})