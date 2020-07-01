import React from 'react'
import ClassNames from 'classnames'

export enum AlertType {
  Success = 'success',
  Default = 'default',
  Danger = 'danger',
  Warning = 'warning'
}

export enum AlertSize {
  Large = 'large',
  Medium = 'medium',
  Small = 'small',
  Min = 'min'
}

interface AlertProps {
  alertType?: AlertType,
  title?: string,
  className?: string,
  alertSize?: AlertSize
}

const Alert: React.FC<AlertProps> = (props) => {
  const { alertType, title, className, alertSize } = props

  const classes = ClassNames('alert', className, {
    [`alert-${alertType}`]: alertType,
    [`alert-${alertSize}`]: alertSize
  })

  return (
    <>
      <div className={classes}>{title}</div>
    </>
  )
}

export default Alert