import React, {FC,CSSProperties} from 'react'

export interface ProgressProps{
  strokeHeight?:number;
  percentage?:number;
  style?:CSSProperties;
  showText:boolean;
}