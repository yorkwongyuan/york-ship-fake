import React,{DragEvent,FC,useState} from 'react'
import classNames from 'classnames'

export interface DragProps{
  onFile:(file:FileList) => void;
}

export const Drag:FC<DragProps> = (props) =>{
  const [dragOver,setDragOver] = useState(false)
  const {onFile} = props
  const klass = classNames('drag',{
    'is-drag-over':dragOver
  })
  
  // 拖拽/离开
  const handleDrag = (e:DragEvent,over:boolean) =>{
    e.preventDefault()
    setDragOver(over)
  }
  // 投放
  const handleDrop = (e:DragEvent<HTMLElement>) =>{
    e.preventDefault()
    let fileLists = e.dataTransfer.files
    onFile(fileLists)
  }
  return (
    <>
    <div 
      className={klass}
      onDragOver={(e) => handleDrag(e,true)}
      onDragLeave={(e) => handleDrag(e,false)}
      onDrop={e=>handleDrop(e)}
    >
    </div>
    </>
  )
}
