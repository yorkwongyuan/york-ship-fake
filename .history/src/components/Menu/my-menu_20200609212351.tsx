import React, { createContext, useState } from 'react';
import { MenuItemProps } from './my-menu-item'
import classNames from 'classnames'
type mode = 'horizon' | 'vertical'
type SelectCallback = (index: string) => void;

export interface MenuProps {
  mode?: mode;
  disabled?: boolean;
  defaultIndex?: string;
  className?: string;
  onSelect?: SelectCallback;
  defaultOpenSubMenus: string[]
}

interface IMenuContext {
  index: string;
  onSelect?: SelectCallback;
  mode?: mode,
  defaultOpenSubMenus: string[]
}

export let MenuContext = createContext<IMenuContext>({ index: '0' })

const Menu: React.FC<MenuProps> = (props) => {
  const { defaultIndex, mode, className, onSelect, disabled, children } = props
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
    mode: mode
  }

  const renderChildren = () => {
    return React.Children.map(children, (child, index) => {
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
  disabled: false
}

export default Menu
