import React from 'react'

export enum ButtonType {
  Primary = 'primary',
  Disabled = 'disabled',
  Default = 'default',
  Link = 'link'
}

export enum ButtonSize {
  Large = 'lg',
  Small = 'sm'
}

interface BaseButtonProps {
  className?: string;
  disabled?: boolean;
  btnType?: ButtonType;
  size?: ButtonSize;
  children?: React.ReactNode;
  href?: string;
}

export const Button: React.FC<BaseButtonProps> = (props) => {
  let { href, disabled, children } = props
  return (
    <>
      <button>{children}</button>
    </>
  )
}
