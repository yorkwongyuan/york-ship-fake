import React, { FunctionComponentElement, Children, FC, useContext } from 'react'
import ClassNames from 'classnames'
import { MenuContext } from './my-menu'

interface SubMenusProps {
  title?: string;
  index: number;
  className: string;
}

const SubMenu: FC<SubMenusProps> = ({ title, index, className }) => {
  let context = useContext(MenuContext)
  let classes = ClassNames('my-submenu', className, {
    'is-active': context.index === index
  })

  return (
    <>
      <li>
        <div>{tilte}</div>
      </li>
    </>
  )
}