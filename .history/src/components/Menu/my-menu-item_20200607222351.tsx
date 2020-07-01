import React from 'react'
import classnames from 'classnames';

interface MenuItemProps {
  index: number;
  disabled?: boolean;
  style?: React.CSSProperties;
  className?: string;
}

const MenuItem: React.FC<MenuItemProps> = (props) => {
  const { index, disabled, className } = props;
}