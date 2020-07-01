import React, { createContext, useState } from 'react'
import classNames from 'classnames'

type menuMode = 'horizontal' | 'vertical'
type SelectCallback = (selectedIndex: number) => void;

export interface MenuProps {
  defaultIndex?: number;
  className?: string;
  mode?: menuMode;
  style?: React.CSSProperties;
  onSelect?: SelectCallback;
}

export interface IMenuContext {
  index: number;
  onSelect?: SelectCallback
}

export const MenuContext = createContext<IMenuContext>({ index: 0 })

const Menu: React.FC<MenuProps> = (props) => {
  const { defaultIndex, className, mode, style, onSelect, children } = props
  const [currentActive, setActive] = useState(defaultIndex)

  const passedContext: IMenuContext = {
    index: currentActive ? currentActive : 0
  }
  const classes = classNames('yk-menu', className, {
    'yk-menu-vertical': mode === 'vertical',
    'yk-menu-horizontal': mode === 'horizontal'
  })
  return (
    <ul className={classes} style={style}>
      {children}
    </ul>
  )
}

Menu.defaultProps = {
  defaultIndex: 0,
  mode: 'horizontal'
}

export default Menu