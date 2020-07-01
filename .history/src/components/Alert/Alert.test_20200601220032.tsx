import React from 'react'
import Alert, { AlertProps, AlertType, AlertSize } from './yk-alert'
import { fireEvent, render } from '@testing-library/react'
let testProps: AlertProps = {
  alertSize: AlertSize.Large,
  alertType: AlertType.Success
}
describe('Alert test', () => {
  it('test the props', () => {
    const wrapper = render(<Alert></Alert>)
  })
})