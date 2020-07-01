import React, { createContext, useState } from 'react';
import classNames from 'classnames'
type mode = 'horizon' | 'vertical'
type SelectCallback = (index: number) => void;

interface MenuProps {
  mode?: mode;
  disabled?: boolean;
  defaultIndex: number;
  className?: string;
  onSelect?: SelectCallback;
}

interface IMenuContext {
  index: number;
  onSelect?: SelectCallback
}


const Menu: React.FC<MenuProps> = (props) => {
  const { defaultIndex, mode, className, onSelect, disabled, children } = props
  let classes = classNames('my-menu', className, {
    'is-disabled': disabled,
    'is-horizon': mode === 'horizon',
    'is-vertical': mode === 'vertical'
  })
  let [currentIndex, setIndex] = useState(defaultIndex)
  // 传递给子组件的点击事件
  let handleClick = function (currentIndex: number) {
    setIndex(currentIndex)
    if (onSelect) {
      onSelect(currentIndex)
    }
  }
  // 传递给子组件的context
  let passedContext: IMenuContext = {
    index: currentIndex ? currentIndex : 0,
    onSelect: handleClick
  }

  let MenuContext = createContext<IMenuContext>({ index: defaultIndex })
  return (
    <>
      <MenuContext.Provider value={passedContext}>
        <ul className={classes}>
          {children}
        </ul>
      </MenuContext.Provider>
    </>
  )
}
Menu.defaultProps = {
  defaultIndex: 0,
  mode: 'horizon',
  disabled: false
}

export default Menu
