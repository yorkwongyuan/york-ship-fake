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
  const { alertType, name, className } = props

  const classes = ClassNames('alert', className, {

  })

  return (
    <>
      <div></div>
    </>
  )
}