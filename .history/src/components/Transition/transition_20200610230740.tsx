import React, { FC } from 'react'
import { CSSTransition } from 'react-transition-group'
// import { CSSTransitionProps } from 'react-transition-group/CSSTransition'
let CSSTransition = CSSTransition.CSSTransition
type animationName = 'zoom-in-top' | 'zoom-in-right' | 'zoom-in-bottom' | 'zoom-in-left';

interface TransitionProps extends CSSTransitionProps {
  animation?: animationName;
}
const Transition: FC<TransitionProps> = (props) => {
  const { animation, } = props
}