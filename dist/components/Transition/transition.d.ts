import { FC } from 'react';
import { CSSTransitionProps } from 'react-transition-group/CSSTransition';
declare type animationName = 'zoom-in-top' | 'zoom-in-right' | 'zoom-in-bottom' | 'zoom-in-left';
declare type TransitionProps = CSSTransitionProps & {
    animation?: animationName;
    wrapper?: boolean;
};
declare const Transition: FC<TransitionProps>;
export default Transition;
