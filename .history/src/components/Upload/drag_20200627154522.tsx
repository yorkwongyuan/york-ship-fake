import React,{DragEvent,FC,useState} from 'react'
import classNames from 'classnames'

export interface DragProps{
  onFile:(file:File) => void;
}

const handleDragOver = (e:DragEvent) =>{

}

export const Drag:FC<DragProps> = (props) =>{
  const [dragOver,setDragOver] = useState(false)
  const {onFile} = props
  return (
    <>
    <div onDragOver={(e:DragEvent) => handleDragOver(e)}>

    </div>

    </>
  )
}
