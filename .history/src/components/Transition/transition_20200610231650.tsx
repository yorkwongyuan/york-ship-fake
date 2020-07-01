import React, { FC } from 'react'
import { CSSTransition } from 'react-transition-group'
import { CSSTransitionProps } from 'react-transition-group/CSSTransition'


type animationName = 'zoom-in-top' | 'zoom-in-right' | 'zoom-in-bottom' | 'zoom-in-left';

// 新版无法使用interface ,据老师说是CSSTransitionProps用了联合类型
type TransitionProps = CSSTransitionProps & {
  animation?: animationName,
  wrapper?: boolean,
}

const Transition: FC<TransitionProps> = (props) => {
  const { animation, classNames, children, ...restProps } = props
  return (
    <CSSTransition classNames={classNames ? classNames : animation}  {...restProps}>
      {children}
    </CSSTransition>
  )
}

Transition.defaultProps = {
  unmountOnExit: true,
  appear: true
}

export default Transition