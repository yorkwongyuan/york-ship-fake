import React, {FC,CSSProperties} from 'react'

export interface ProgressProps{
  strokeHeight?:number;
  percentage?:number;
  styles?:CSSProperties;
  showText:boolean;
}

export const Progress:FC<ProgressProps> = (props) =>{
  const {strokeHeight,percentage,styles,showText} = props
  return (
    <>
<div className="progress-bar">
<div className="progress-outer">
  <div className="progress-inner">
    
  </div>
</div>
</div>
    </>
  )
}