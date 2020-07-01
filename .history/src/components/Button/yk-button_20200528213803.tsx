import React from 'react';
import ClassNames from 'classnames'
export enum ButtonSize {
  Small = 'sm',
  Large = 'lg'
}
export enum ButtonType {
  Primary = 'primary',
  Default = 'default',
  Danger = 'danger',
  Link = 'link',
  Disabled = 'disabled'
}

interface BaseButtonProps {
  className?: string;
  disabled?: boolean;
  btnType?: ButtonType;
  size?: ButtonSize;
  children?: React.ReactNode;
  href?: string;
}

type NativeButtonProps = BaseButtonProps & React.ButtonHTMLAttributes<HTMLElement>
type AnchorButtonProps = BaseButtonProps & React.AnchorHTMLAttributes<HTMLElement>

const Button: React.FC<BaseButtonProps> = (props) => {
  const { disabled, btnType, size, children, href } = props
  const classes = ClassNames('btn', {
    [`btn-${btnType}`]: btnType,
    [`btn-${size}`]: size,
    'disabled': (btnType === ButtonType.Disabled && disabled)
  })
  if (btnType === ButtonType.Link && href) {
    return (
      <a href={href} className={classes}>{children}</a>
    )
  } else {
    return (
      <button className={classes} disabled={disabled}>{children}</button>
    )
  }
}

Button.defaultProps = {
  disabled: false,
  btnType: ButtonType.Default
}

function extendes<T, U>(first: T, second: U): T & U {
  let result = {} as T & U

  for (let id in first) {
    result[id] = first[id]
  }
  return result
}

export default Button