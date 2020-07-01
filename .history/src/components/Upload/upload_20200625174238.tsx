import React,{FC,useRef} from 'react'
import Button from '../Button/yk-button'

export interface UploadProps{
  action:string;
  onSuccess?:(data:any,file:File)=>void;
  onError?:(err:any,file:File)=>void;
  onProgress?:(percentage:number,file:File)=>void;
}

const Upload:FC<UploadProps> = (props)=>{
  const {action} = props
  const handleClick = () =>{
    
  }
  return(
    <>
      <Button btnType="primary" onClick={handleClick}>按钮</Button>
    </>
  )
}
