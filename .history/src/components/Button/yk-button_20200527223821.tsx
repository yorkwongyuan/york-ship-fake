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
const Button: React.FC<BaseButtonProps> = (props) => {
  const { className, disabled, btnType, size, children, href } = props
  const classes = ClassNames('btn', {
    [`btn-${btnType}`]: btnType,
    [`btn-${size}`]: size,
    'disabled': (btnType === ButtonType.Disabled && disabled)
  })
  if (btnType === ButtonType.Link) {
    return (
      <a href={} classname={classes}></a>
    )
  }
}
// const Button: React.FC<BaseButtonProps> = (props) => {
//   const { btnType, disabled, size, children, href } = props
//   const classes = ClassNames('btn', {
//     [`btn-${btnType}`]: btnType,
//     [`btn-${size}`]: size,
//     'disabled': (btnType === ButtonType.Disabled) && disabled,
//   })

//   if (btnType === ButtonType.Link) {
//     return (
//       <a href={href} className={classes}>
//         {children}
//       </a>
//     )
//   } else {
//     return (
//       <button className={classes} disabled={disabled}>
//         {children}
//       </button>
//     )
//   }
// }

Button.defaultProps = {
  disabled: false,
  btnType: ButtonType.Default
}

export default Button