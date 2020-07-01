import React,{FC,useRef,ChangeEvent} from 'react'
import Button from '../Button/yk-button'

export interface UploadProps{
  action:string;
  onSuccess?:(data:any,file:File)=>void;
  onError?:(err:any,file:File)=>void;
  onProgress?:(percentage:number,file:File)=>void;
}
type ChangeEventInput = ChangeEvent<HTMLInputElement>
export const Upload:FC<UploadProps> = (props)=>{
  const inputNode = useRef<HTMLInputElement>(null)
  const {action} = props

  const handleClick = () =>{
    if(inputNode.current){
      inputNode.current.click()

    }
  }
  const uploadFiles = (files:FileList)=>{
    let postFiles = Array.from(files)
  }

  const handleInputChange = (e:ChangeEventInput) =>{
    let files = e.target.files
    console.log(files,'files')
      if(files){
        uploadFiles(files)
      }
  }

 
  return(
    <>
      <input type="file" style={{display:'none'}} ref={inputNode} onChange={(e:ChangeEventInput) => handleInputChange(e)}/>
      <Button btnType="primary" onClick={() => handleClick()}>按钮</Button>
    </>
  )
}

export default Upload
