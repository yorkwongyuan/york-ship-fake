import React, { FunctionComponentElement, Children, FC, useContext, cloneElement } from 'react'
import ClassNames from 'classnames'
import { MenuContext } from './my-menu'
import { MenuItemProps } from './my-menu-item'
interface SubMenusProps {
  title: string;
  index?: number;
  className?: string;
}

const SubMenu: FC<SubMenusProps> = ({ title, index, className, children }) => {
  let context = useContext(MenuContext)
  let classes = ClassNames('my-submenu', className, {
    'is-active': context.index === index
  })
  let renderChildren = () => {
    const childrenElements = Children.map(children, (child, i) => {
      let childElement = child as FunctionComponentElement<MenuItemProps>
      let { displayName } = childElement.type
      if (displayName === 'MenuItem') {
        return childElement
      } else {
        console.error('节点错误-->submenu')
      }
    })
    return (
      <ul className="sub">

      </ul>
    )
  }
  return (
    <>
      <li className={classes} key={index}>
        <div>{title}</div>
        <div>
          {renderChildren()}
        </div>
      </li>
    </>
  )
}

SubMenu.displayName = 'SubMenu'

export default SubMenu