import React,{FC,useRef,ChangeEvent} from 'react'
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
    if(inputNode.current){
      inputNode.current.click()

    }
  }
  const handleInputChange = (e:ChangeEvent<HTMLInputElement>) =>{
let files = e.target.files
  }
  return(
    <>
      <input type="file" style={{display:'none'}} ref={inputNode} onChange={() => handleInputChange()}/>
      <Button btnType="primary" onClick={() => handleClick()}>按钮</Button>
    </>
  )
}

export default Upload
