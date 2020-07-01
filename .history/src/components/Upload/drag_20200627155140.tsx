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
  const handleDrag = (e:DragEvent,over:boolean) =>{
    e.preventDefault()
    setDragOver(over)
  }
  return (
    <>
    <div 
      className={klass}
      onDragOver={(e) => handleDrag(e,true)}
      onDragLeave={(e) => handleDrag(e,false)}
      onDrop={}
    >
    </div>
    </>
  )
}
