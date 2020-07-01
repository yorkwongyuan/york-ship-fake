import React, { FunctionComponentElement, Children, FC, useContext, useState } from 'react'
import ClassNames from 'classnames'
import { MenuContext } from './my-menu'
import { MenuItemProps } from './my-menu-item'
interface SubMenusProps {
  title: string;
  index?: number;
  className?: string;
}

const SubMenu: FC<SubMenusProps> = ({ title, index, className, children }) => {
  let [isOpen, setIsOpen] = useState(false)
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
    let handleClick = function (e: React.MouseEvent) {
      e.preventDefault()
      setIsOpen(!isOpen)
    }
    return (
      <>
        <div>{isOpen}</div>
        <ul className="my-submenu" onClick={handleClick}>
          {childrenElements}
        </ul>
      </>
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