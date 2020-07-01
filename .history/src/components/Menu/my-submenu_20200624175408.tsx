import React, { useState, FC, Children, useContext, FunctionComponentElement, cloneElement } from 'react'
import { MenuContext } from './my-menu'
import { MenuItemProps } from './my-menu-item'
import classNames from 'classnames'
import Transition from '../Transition/transition'
import Icon from '../Icon/icon'
interface SubMenus {
  index?: string;
  title: string;
  className?: string;
}

const SubMenu: FC<SubMenus> = ({ index, title, className, children }) => {
  let context = useContext(MenuContext)
  let openMenus = context.defaultOpenSubMenus as Array<string>
  let isOpend = (index && context.mode === 'vertical') ? openMenus.includes(index) : false
  let [isOpen, setIsOpen] = useState(isOpend);
  const classes = classNames(className, {
    'is-active': context.index === index,
    'is-opened': isOpen,
    'is-vertical': context.mode === 'vertical'
  })

  // 点击事件是点一次取一次反

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault()
    setIsOpen(!isOpen)
  }



  // 鼠标事件拥有明确的true还是false

  let timer: any;
  const handleMouse = (e: React.MouseEvent, toggle: boolean) => {
    e.preventDefault()
    clearTimeout(timer)
    timer = setTimeout(() => {
      setIsOpen(toggle)
    }, 300)
  }

  const clickEvents = context.mode === 'vertical' ? { onClick: handleClick } : {}
  const mouseEvents = context.mode === 'horizon' ? {
    onMouseEnter: (e: React.MouseEvent) => { handleMouse(e, true) },
    onMouseLeave: (e: React.MouseEvent) => { handleMouse(e, false) }
  } : {}


  const renderChildren = () => {
    const subMenuClasses = classNames('my-submenu', {
      'is-open': isOpen,

    })
    const childrenElements = Children.map(children, (child, i) => {
      const childrenElement = child as FunctionComponentElement<MenuItemProps>
      let { displayName } = childrenElement.type
      if (displayName === 'MenuItem') {
        return cloneElement(childrenElement, { index: `${index}-${i}` })
      } else {
        console.error('submenu节点错误了')
      }
    })

    return (
      <Transition in={isOpen} animation="zoom-in-top" timeout={300}>
        <ul className={subMenuClasses}>
          {childrenElements}
        </ul>
      </Transition>
    )
  }

  return (
    <>
      <li className={classes} {...mouseEvents}>
        <div className="my-submenu__title" {...clickEvents}>{title}
        
        {/* <Icon theme="secondary" className="my-menu__icon" icon="square" /> */}
        
        <Icon icon="car" theme="danger" />
        </div>
        <div>
          {renderChildren()}
        </div>
      </li>
    </>
  )
}
SubMenu.displayName = 'SubMenu'
export default SubMenu