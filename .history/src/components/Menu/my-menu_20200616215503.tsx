import React, { createContext, useState, FC, Children } from 'react';
import { MenuItemProps } from './my-menu-item'
import classNames from 'classnames'
type mode = 'horizon' | 'vertical'
type SelectCallback = (index: string) => void;

export interface MenuProps {
  /** 模式 */
  mode?: mode;
  /** 设置Button是否禁用 */
  disabled?: boolean;
  /** haha */
  defaultIndex?: string;
  className?: string;
  /** Button type为link的时候,a标签的href属性 */
  onSelect?: SelectCallback;
  defaultOpenSubMenus?: string[]
}

interface IMenuContext {
  index: string;
  onSelect?: SelectCallback;
  mode?: mode,
  defaultOpenSubMenus?: string[]
}

export let MenuContext = createContext<IMenuContext>({ index: '0' })

/**
 * # Menu组件的使用方法
 * ~~~ js
 * import {Menu} from 'Menu'
 * ~~~
 */
const Menu: FC<MenuProps> = (props) => {
  const { defaultIndex, mode, className, onSelect, disabled, children, defaultOpenSubMenus } = props
  let classes = classNames('my-menu', className, {
    'is-disabled': disabled,
    'is-horizon': mode === 'horizon',
    'is-vertical': mode === 'vertical'
  })
  let [currentIndex, setIndex] = useState(defaultIndex)
  // 传递给子组件的点击事件
  let handleClick = function (index: string) {
    setIndex(index)
    if (onSelect) {
      onSelect(index)
    }
  }
  // 传递给子组件的context
  let passedContext: IMenuContext = {
    index: currentIndex ? currentIndex : '0',
    onSelect: handleClick,
    mode,
    defaultOpenSubMenus
  }

  const renderChildren = () => {
    return Children.map(children, (child, index) => {
      const el = child as React.FunctionComponentElement<MenuItemProps>
      const { displayName } = el.type
      if (displayName === 'MenuItem' || displayName === 'SubMenu') {
        return React.cloneElement(el, { index: index.toString() })
      } else {
        console.error('节点错误')
      }
    })
  }

  return (
    <>
      <ul className={classes} data-testid="test-menu">
        <MenuContext.Provider value={passedContext}>
          {renderChildren()}
        </MenuContext.Provider>
      </ul>
    </>
  )
}
Menu.defaultProps = {
  defaultIndex: '0',
  mode: 'horizon',
  disabled: false,
  defaultOpenSubMenus: []
}

export default Menu;
