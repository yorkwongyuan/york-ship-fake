import React,{DragEvent,FC,useState} from 'react'
import classNames from 'classnames'

export interface DragProps{
  onFile:(file:File) => void;
}

export const Drag:FC<DragProps> = (props) =>{
  const [dragOver,setDragOver] = useState(false)
  const {onFile} = props
  const klass = classNames('drag',{
    'is-drag-over':dragOver
  })
  const handleDragOver = (e:DragEvent) =>{
    setDragOver(true)
  }
  return (
    <>
    <div 
      onDragOver={() => setDragOver(true)}
      onDragLeave={() => setDragOver(false)}
    >

    </div>
    </>
  )
}
