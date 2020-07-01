import React, {FC,CSSProperties} from 'react'
import {theme} from '../Icon/icon'
export interface ProgressProps{
  strokeHeight?:number;
  percentage?:number;
  styles?:CSSProperties;
  showText:boolean;
  theme:theme
}

export const Progress:FC<ProgressProps> = (props) =>{
  const {strokeHeight,percentage,styles,showText,theme} = props
  return (
    <>
    <div className="progress-bar" style={styles}>
      <div className="progress-outer">
        <div className={`progress-inner theme-${theme}`} style={{width:`${percentage}%`}}>
          
        </div>
      </div>
    </div>
    </>
  )
}

Progress.defaultProps = {
  strokeHeight:15,
  showText:true
}