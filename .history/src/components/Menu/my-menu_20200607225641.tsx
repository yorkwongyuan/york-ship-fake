import React, { createContext, useState } from 'react';
import classNames from 'classnames'
type mode = 'horizon' | 'vertical'
type SelectCallback = (index: number) => void;

export interface MenuProps {
  mode?: mode;
  disabled?: boolean;
  defaultIndex?: number;
  className?: string;
  onSelect?: SelectCallback;
}

interface IMenuContext {
  index: number;
  onSelect?: SelectCallback
}

export let MenuContext = createContext<IMenuContext>({ index: 0 })

const Menu: React.FC<MenuProps> = (props) => {
  const { defaultIndex, mode, className, onSelect, disabled, children } = props
  let classes = classNames('my-menu', className, {
    'is-disabled': disabled,
    'is-horizon': mode === 'horizon',
    'is-vertical': mode === 'vertical'
  })
  let [currentIndex, setIndex] = useState(defaultIndex)
  // 传递给子组件的点击事件
  let handleClick = function (index: number) {
    console.log(index, 'index')
    setIndex(index)
    if (onSelect) {
      onSelect(index)
    }
  }
  // 传递给子组件的context
  let passedContext: IMenuContext = {
    index: currentIndex ? currentIndex : 0,
    onSelect: handleClick
  }

  return (
    <>
      <ul className={classes}>
        <MenuContext.Provider value={passedContext}>
          {children}
        </MenuContext.Provider>
      </ul>
    </>
  )
}
Menu.defaultProps = {
  defaultIndex: 0,
  mode: 'horizon',
  disabled: false
}

export default Menu
