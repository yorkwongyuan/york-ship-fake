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
  title?: string,
  className?: string
}
const Alert: React.FC<AlertProps> = (props) => {
  const { alertType, title, className } = props

  const classes = ClassNames('alert', className, {
    [`alert-${alertType}`]: alertType
  })

  return (
    <>
      <div className={classes}>{title}</div>
    </>
  )
}

export default Alert