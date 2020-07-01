import React, { FC, ReactElement, InputHTMLAttributes, } from 'react'
import classNames from 'classnames'
import Icon from '../Icon/icon'
import { IconProp } from '@fortawesome/fontawesome-svg-core'
type InputSize = 'lg' | 'sm'
// Omit 忽略掉InputHTMLAttributes<HTMLElement>中的size属性
export interface InputProps extends Omit<InputHTMLAttributes<HTMLElement>, 'size'> {
  /** Button type为link的时候,a标签的href属性 */
  disabled?: boolean;
  /** 123 */
  size: InputSize;
  /** Button type为link的时候,a标签的href属性 */
  className?: string;
  /** Button type为link的时候,a标签的href属性 */
  append?: string | ReactElement;
  /** 后面插入的*/
  prepand?: string | ReactElement;
  icon?: IconProp;
}
/**
 * ~~~ js
 * import Input from 'input'
 * ~~~
 */
export const Input: FC<InputProps> = (props) => {
  let { className, disabled, append, prepand, icon } = props
  let classes = classNames('my-input', className, {
    'is-disabled': disabled
  })
  return (
    <>
      {prepand && <div>{prepand}</div>}
      {icon && <div><Icon theme="danger" icon={icon} title="213" /></div>}
      <input type="text" className={classes} />
      {append && <div>{append}</div>}
    </>
  )
}

Input.defaultProps = {
  disabled: false,
  size: "lg"
}

export default Input;