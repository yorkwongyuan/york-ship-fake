import React, {FC,CSSProperties} from 'react'

export interface ProgressProps{
  strokeHeight?:number;
  percentage?:number;
  styles?:CSSProperties;
  showText:boolean;
}

export const Progress:FC<ProgressProps> = (props) =>{
const {strokeHeight,percentage,styles,showText} = props
}