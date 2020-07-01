import React, { FC, ReactElement, InputHTMLAttributes, } from 'react'
import classNames from 'classnames'
type InputSize = 'lg' | 'sm'
// Omit 忽略掉InputHTMLAttributes<HTMLElement>中的size属性
interface InputProps extends Omit<InputHTMLAttributes<HTMLElement>, 'size'> {
  /** 哈哈 */
  disabled?: boolean;
  /** 哈哈 */
  size: InputSize;
  /** 哈哈 */
  className?: string;
  /** 哈哈 */
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