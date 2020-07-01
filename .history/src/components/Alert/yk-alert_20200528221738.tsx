import React from 'react'
import ClassNames from 'classnames'

export enum AlertType {
  Success = 'success',
  Default = 'default',
  Danger = 'danger',
  Warning = 'warning'
}

interface AlertProps {
  alertType?: AlertType
}
const Alert: React.FC<>