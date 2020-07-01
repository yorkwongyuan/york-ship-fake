import React, { FC } from 'react'
import { FontAwesomeIcon, FontAwesomeIconProps } from '@fortawesome/react-fontawesome'
import classNames from 'classnames'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { library } from '@fortawesome/fontawesome-svg-core'
library.add(fas)
export type theme = 'primary' | 'secondary' | 'danger';

export interface IconProps extends FontAwesomeIconProps {
  theme?: theme;
  className?: string;
}

export const Icon: FC<IconProps> = (props) => {
  let { theme, className, ...restProps } = props
  const classes = classNames('my-icon', className, {
    [`icon-${theme}`]: theme
  })
  return (
    <FontAwesomeIcon className={classes} {...restProps} />
  )
}
export default Icon;