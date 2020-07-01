import React from 'react'
import Alert, { AlertProps, AlertType, AlertSize } from './yk-alert'
import { fireEvent, render } from '@testing-library/react'
let testProps: AlertProps = {
  alertSize: AlertSize.Large,
  alertType: AlertType.Success,
  title: '老村1'
}
describe('Alert test', () => {
  it('test the props', () => {
    const wrapper = render(<Alert {...testProps}></Alert>)
    const element = wrapper.getByText('老村1');
    expect(element).toBeTruthy()

  })
})