import React, { FC, ReactElement, InputHTMLAttributes, } from 'react'
import classNames from 'classnames'
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
  prepand?: string | ReactElement;
}
/**
 * ~~~ js
 * import Input from 'input'
 * ~~~
 */
const Input: FC<InputProps> = (props) => {
  let { className, disabled } = props
  let classes = classNames('my-input', className, {
    'is-disabled': disabled
  })

  return (
    <>
      <input type="text" className={classes} />
    </>
  )
}

Input.defaultProps = {
  disabled: false,
  size: "lg"
}

export default Input;