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
    [`alert-${alertType}`]: alertType
  })

  return (
    <>
      <div className={classes}></div>
    </>
  )
}

export default Alert