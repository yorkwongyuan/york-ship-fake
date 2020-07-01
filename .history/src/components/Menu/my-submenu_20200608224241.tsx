import React, { FunctionComponentElement, Children, FC } from 'react'
import ClassNames from 'classnames'
import { MenuContext } from './my-menu'

interface SubMenusProps {
  title?: string;
  index: string;
  className: string;
}

const SubMenu: FC<SubMenusProps> = ({ title, index, className }) => {
  let classes = ClassNames('my-submenu', className, {
    'is-active': MenuContext === index
  })
}