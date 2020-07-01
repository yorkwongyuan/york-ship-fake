import React from 'react'
enum ButtonType {
  Primary = 'primary',
  Disabled = 'disabled',
  Default = 'default',
  Link = 'link'
}

enum ButtonSize {
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
const Button: React.FC<BaseButtonProps> = (props) => {
  let { href, disabled, } = props
  return (
    <>

    </>
  )
}