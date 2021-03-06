import React from 'react'
import ClassNames from 'classnames'

export enum AlertType {
  Success = 'success',
  Default = 'default',
  Danger = 'danger',
  Warning = 'warning'
}

interface AlertProps {
  alertType?: AlertType,
  name?: string,
  className?: string
}
const Alert: React.FC<AlertProps> = (props) => {
  const { alertType, name } = props

  const classes = ClassNames('alert')

  return (
    <>
      <div></div>
    </>
  )
}