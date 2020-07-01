import React, { useState, FC, Children, useContext, FunctionComponentElement } from 'react'
import { MenuContext } from './my-menu'
import { MenuItemProps } from './my-menu-item'
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

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault()
    setIsOpen(!isOpen)
  }
  const renderChildren = () => {
    const subClasses = classNames({
      'is-open': isOpen
    })
    const childElements = Children.map(children, (child) => {
      let childElement = child as FunctionComponentElement<MenuItemProps>
      let { displayName } = childElement.type
      console.log(displayName, 'displayName')
      if (displayName === 'MenuItem') {
        return childElement
      } else {
        console.error('节点错误')
      }
    })

    return (
      <>
        <ul className={subClasses}>
          {childElements}
        </ul>
      </>
    )
  }

  return (
    <>
      <li className={classes}>
        <div onClick={handleClick}>{title}</div>
        <div>
          {renderChildren()}
        </div>
      </li>
    </>
  )
}
SubMenu.displayName = 'SubMenu'
export default SubMenu