import React, { createContext, useState } from 'react';
import classNames from 'classnames'
type mode = 'horizon' | 'vertical'
interface MenuProps {
  mode?: mode;
  disabled?: boolean;
  defaultIndex: number;
  className?: string;
  onSelect?: (index: number) => void;
}

const Menu: React.FC<MenuProps> = (props) => {
  const { defaultIndex, mode, className, onSelect, disabled } = props
  let FinalClassName = classNames('my-menu', className, {
    'is-disabled': disabled
  })
  return (
    < className={FinalClassName}>
      <div></div>
    </>
  )
}
