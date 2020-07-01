import React, { FC, ReactElement, InputHTMLAttributes, ChangeEvent } from 'react'
import classNames from 'classnames'
import Icon from '../Icon/icon'
import { IconProp } from '@fortawesome/fontawesome-svg-core'
type InputSize = 'lg' | 'sm'
// Omit 忽略掉InputHTMLAttributes<HTMLElement>中的size属性
export interface InputProps extends Omit<InputHTMLAttributes<HTMLElement>, 'size'> {
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
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void
}
/**
 * ~~~ js
 * import Input from 'input'
 * ~~~
 */
export const Input: FC<InputProps> = (props) => {
  let { className, disabled, append, prepand, icon, size, ...restProps } = props
  let classes = classNames('my-input', className, {
    'is-disabled': disabled,
    [`is-${size}`]: size
  })

  // 修正初始值为undefined
  const fixedValue = (value: any) => {
    if (typeof value === 'undefined' || value === null) {
      return ''
    }
    return value
  }

  // 防止同时存在value和defaultValue
  if ('value' in props) {
    delete restProps['defaultValue']
    restProps.value = fixedValue(props.value)
  }
  return (
    <>
      {prepand && <div>{prepand}</div>}
      {icon && <div><Icon icon={icon} /></div>}
      <input className={classes} disabled={disabled} {...restProps} />
      {append && <div>{append}</div>}
    </>
  )
}

Input.defaultProps = {
  disabled: false,
  size: "lg"
}

export default Input;