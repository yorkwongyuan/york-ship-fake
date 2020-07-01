import React from 'react'
import { render } from '@testing-library/react'
import Button from './yk-button'
test('our first react test case', () => {
  const wrapper = render(<Button></Button>)
})