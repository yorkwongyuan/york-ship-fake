import React, { useState, FC, Children, useContext } from 'react'
import { MenuContext } from './my-menu'
import classNames from 'classnames'
interface SubMenus {
  index?: number;
  title: string;
  className?: string;
}

const SubMenu: FC<SubMenus> = ({ index, title, className, children }) => {
  let [isOpen, setIsOpen] = useState(false);
  let context = useContext(MenuContext)
  const classes = classNames('my-submenu', className, {
    'is-active': context.index === index
  })

  const renderChildren = () => {
    return Children.map(children, (child) => {

    })
  }

  return (
    <>
      <li className={classes}>
        <div>{title}</div>
      </li>
    </>
  )
}