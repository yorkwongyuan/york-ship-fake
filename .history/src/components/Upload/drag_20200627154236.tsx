import {DragEvent,FC} from 'react'
import classNames from 'classnames'

export interface DragProps{
  onFile:(file:File) => void;
}

export const Drag:FC<DragProps> = (props) =>{
const {onFile} = props
}
