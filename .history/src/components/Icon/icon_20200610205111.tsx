import React, { FC } from 'react'
import { FontAwesomeIcon, FontAwesomeIconProps } from '@fortawesome/react-fontawesome'
import classNames from 'classnames'
type theme = 'primary' | 'secondary' | 'danger';
export interface IconProps extends FontAwesomeIconProps {
  theme: theme;
  className: string;
}

const Icon: FC<IconProps> = (props) => {
  let { theme, className } = props
  const classes = classNames('my-icon', className, {
    [`icon-${theme}`]: theme
  })
}

export default Icon