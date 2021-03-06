import React from 'react';
import ClassNames from 'classnames'
export enum ButtonSize {
  Large = 'lg',
  Small = 'sm'
}
export enum ButtonType {
  Primary = 'primary',
  Disabled = 'disabled',
  Default = 'default',
  Link = 'link'
}

interface BaseButtonProps {
  className?: string;
  disabled?: boolean;
  size?: ButtonSize;
  btnType?: ButtonType;
  children?: React.ReactNode;
}

const Button: React.FC<BaseButtonProps> = (props) => {
  const { btnType, disabled, size, children, className } = props

}