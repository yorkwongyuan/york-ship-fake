import React, { createContext, useState } from 'react';

type mode = 'horizon' | 'vertical'
interface MenuProps {
  mode?: mode;
  defaultIndex: number;
  className?: string;
  onSelect?: (index: number) => void;
}

const Menu: React.FC<MenuProps> = (props) => {
  const { defaultIndex, mode, className, onSelect } = props
}
