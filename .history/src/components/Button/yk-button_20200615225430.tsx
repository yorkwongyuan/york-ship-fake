import React, { ButtonHTMLAttributes, AnchorHTMLAttributes, FC } from 'react';
import ClassNames from 'classnames'


export type ButtonSize = 'sm' | 'lg'
export type ButtonType = 'primary' | 'default' | 'danger' | 'link' | 'disabled'

interface BaseButtonProps {
  className?: string;
  disabled?: boolean;
  btnType?: ButtonType;
  size?: ButtonSize;
  children?: React.ReactNode;
  href?: string;
}

// 交叉类型
type NativeButtonProps = BaseButtonProps & ButtonHTMLAttributes<HTMLElement>
type NativeAnchorProps = BaseButtonProps & AnchorHTMLAttributes<HTMLElement>

export type ButtonProps = Partial<NativeButtonProps & NativeAnchorProps>

/**
 * 
 * 这是我的第一个button组件
 * ~~~ js
 * import {Button} from 'yk-button'
 * ~~~
 */
export const Button: FC<ButtonProps> = (props) => {
  const { className, disabled, btnType, size, children, href, ...restProps } = props
  const classes = ClassNames('btn', className, {
    [`btn-${btnType}`]: btnType,
    [`btn-${size}`]: size,
    'disabled': (btnType === "disabled" && disabled)
  })
  if (btnType === "link" && href) {
    return (
      <a href={href} className={classes} {...restProps}>{children}</a>
    )
  } else {
    return (
      <button className={classes} disabled={disabled} {...restProps}>{children}</button>
    )
  }
}

Button.defaultProps = {
  disabled: false,
  btnType: "default"
}


export default Button;