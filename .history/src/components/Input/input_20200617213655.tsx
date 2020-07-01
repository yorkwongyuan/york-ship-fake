import React, { FC, ReactElement, InputHTMLAttributes, } from 'react'
import classNames from 'classnames'
import Icon from '../Icon/icon'
import { IconProp } from '@fortawesome/fontawesome-svg-core'
type InputSize = 'lg' | 'sm'
// Omit 忽略掉InputHTMLAttributes<HTMLElement>中的size属性
export interface InputProps extends InputHTMLAttributes<HTMLElement> {
  /** Button type为link的时候,a标签的href属性 */
  disabled?: boolean;
  /** 输入框尺寸 */
  size?: InputSize;
  /** Button type为link的时候,a标签的href属性 */
  className?: string;
  /** Button type为link的时候,a标签的href属性 */
  append?: string | ReactElement;
  /** 后面插入的*/
  prepand?: string | ReactElement;
  /** 图标 */
  icon?: IconProp;
}
/**
 * ~~~ js
 * import Input from 'input'
 * ~~~
 */
export const Input: FC<InputProps> = (props) => {
  let { className, disabled, append, prepand, icon, ...restProps } = props
  let classes = classNames('my-input', className, {
    'is-disabled': disabled
  })
  return (
    <>
      {prepand && <div>{prepand}</div>}
      {icon && <div><Icon icon={icon} /></div>}
      <input className={classes} size="lg" />
      {append && <div>{append}</div>}
    </>
  )
}

Input.defaultProps = {
  disabled: false,
  size: "lg"
}

export default Input;