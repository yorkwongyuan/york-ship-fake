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
  content?: string,
  className?: string,
  alertSize?: AlertSize
}

const Alert: React.FC<AlertProps> = (props) => {
  const { alertType, title, className, alertSize, content } = props

  const classes = ClassNames('alert', className, {
    [`alert-${alertType}`]: alertType,
    [`alert-${alertSize}`]: alertSize
  })

  return (
    <>
      <div className={classes}>
        <div className="alert__title">
          {title}
        </div>
        <div className="alert__content">
          {content}
        </div>
      </div>
    </>
  )
}

export default Alert