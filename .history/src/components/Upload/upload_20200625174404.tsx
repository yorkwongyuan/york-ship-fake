import React,{FC,useRef} from 'react'
import Button from '../Button/yk-button'

export interface UploadProps{
  action:string;
  onSuccess?:(data:any,file:File)=>void;
  onError?:(err:any,file:File)=>void;
  onProgress?:(percentage:number,file:File)=>void;
}

export const Upload:FC<UploadProps> = (props)=>{
  const inputNode = useRef<HTMLInputElement>(null)
  const {action} = props
  const handleClick = () =>{
    
  }
  return(
    <>
    <input type="file" onChange={()=>handleClick()} style={{display:'none'}}/>
      <Button btnType="primary" onClick={handleClick}>按钮</Button>
    </>
  )
}

export default Upload
