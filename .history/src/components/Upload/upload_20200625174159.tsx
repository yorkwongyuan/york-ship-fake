import React,{FC} from 'react'
import Button from '../Button/yk-button'

export interface UploadProps{
  action:string;
  onSuccess?:(data:any,file:File)=>void;
  onError?:(err:any,file:File)=>void;
  onProgress?:(percentage:number,file:File)=>void;
}

const Upload:FC<UploadProps> = (props)=>{
  const {action} = props

  return(
    <>
      <Button btnType="primary"></Button>
    </>
  )
}
