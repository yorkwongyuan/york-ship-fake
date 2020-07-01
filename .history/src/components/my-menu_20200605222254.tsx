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
let passedContext = 

const Menu: React.FC<MenuProps> = (props) => {
  const { defaultIndex, mode, className, onSelect, disabled, children } = props
  let FinalClassName = classNames('my-menu', className, {
    'is-disabled': disabled
  })

  return (
    <>
      <ul className={FinalClassName}>
        {children}
      </ul>
    </>
  )
}

export default Menu
