import React from 'react'
import { FontAwesomeIcon, FontAwesomeIconProps } from '@fortawesome/react-fontawesome'

type theme = 'primary' | 'secondary' | 'danger';
export interface IconProps extends FontAwesomeIconProps {
  theme: theme
}