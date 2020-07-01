import React, { useState, FC, Children, useContext } from 'react'
import { MenuContext } from './my-menu'
import classNames from 'classnames'
interface SubMenus {
  index?: number;
  title: string;
  className?: string;
}

const SubMenu: FC<SubMenus> = ({ index, title, className }) => {
  let [isOpen, setIsOpen] = useState(false);
  let context = useContext(MenuContext)
  const classes = classNames('my-submenu', className, {
    'is-active': context.index === index
  })


  return (
    <>
      <li>
        <div>{title}</div>
      </li>
    </>
  )
}