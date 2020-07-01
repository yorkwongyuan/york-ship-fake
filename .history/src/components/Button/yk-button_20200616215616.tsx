import React, { ButtonHTMLAttributes, AnchorHTMLAttributes, FC } from 'react';
import ClassNames from 'classnames'


export type ButtonSize = 'sm' | 'lg'
export type ButtonType = 'primary' | 'default' | 'danger' | 'link' | 'disabled'

interface BaseButtonProps {
  className?: string;
  /** 设置But111ton是否禁用 */
  disabled?: boolean;
  /** 设置Button类型 */
  btnType?: ButtonType;
  /** 设置Button尺寸 */
  size?: ButtonSize;
  children?: React.ReactNode;
  /** Button type为link的时候,a标签的href属性 */
  href?: string;
}

// 交叉类型
type NativeButtonProps = BaseButtonProps & ButtonHTMLAttributes<HTMLElement>
type NativeAnchorProps = BaseButtonProps & AnchorHTMLAttributes<HTMLElement>

export type ButtonProps = Partial<NativeButtonProps & NativeAnchorProps>

/**
 * 
 * 使用方法
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