import React, { FunctionComponentElement, Children, FC, useContext, cloneElement } from 'react'
import ClassNames from 'classnames'
import { MenuContext } from './my-menu'
import { MenuItemProps } from './my-menu-item'
interface SubMenusProps {
  title?: string;
  index: number;
  className: string;
}

const SubMenu: FC<SubMenusProps> = ({ title, index, className, children }) => {
  let context = useContext(MenuContext)
  let classes = ClassNames('my-submenu', className, {
    'is-active': context.index === index
  })
  let renderChildren = () => {
    return Children.map(children, (child, i) => {
      let childElement = child as FunctionComponentElement<MenuItemProps>
      if (childElement.type.displayName === 'MenuItem') {
        return cloneElement(childElement, { index: i })
      }

    })
  }
  return (
    <>
      <li>
        <div>{title}</div>
        <div>

        </div>
      </li>
    </>
  )
}