import React,{FC,useRef,ChangeEvent,useState} from 'react'
import Button from '../Button/yk-button'
import axios from 'axios'

export type FileStatus = 'ready' | 'uploading' | 'success' | 'error'
export interface UploadFile{
  uid:string;
  name:string;
  size:number;
  raw?:File;
  percentage: number;
  status: FileStatus;
  response?:any
}
export interface UploadProps{
  action:string;
  onSuccess?:(data:any,file:File)=>void;
  onError?:(err:any,file:File)=>void;
  onProgress?:(percentage:number,file:File)=>void;
  beforeUpload?:(file:File)=> boolean | Promise<File>;
  onChange?:(file:File) => void;
}
type ChangeEventInput = ChangeEvent<HTMLInputElement>
export const Upload:FC<UploadProps> = (props)=>{
  const [fileLists,setFileLists] = useState<UploadFile[]>([])
  const inputNode = useRef<HTMLInputElement>(null)
  const {action,onProgress,onSuccess,onError,beforeUpload,onChange} = props

  // 修改UploadFile中的某个值
  const updateFileLists = (updateFile:UploadFile,fileObj:Partial<UploadFile>)=>{
    setFileLists(prevLists => {
      return prevLists.map(file =>{
        if(file.uid === updateFile.uid){
          return {...file,...fileObj}
        }else{
          return file
        }
      })
    })
  }
  const handleClick = () =>{
    if(inputNode.current){
      inputNode.current.value = ''
    }
    if(inputNode.current){
      inputNode.current.click()
    }
  }
// post 上传方法
  const post = (file:File) => {
    let _file:UploadFile = {
      uid:Date.now() + 'file-uid',
      name:file.name,
      status:'ready',
      size:file.size,
      percentage:0,
      raw:file
    }
    setFileLists([_file,...fileLists])
    let formData = new FormData()
    formData.append(file.name,file)
    axios.post(action,formData,{
      headers:{
        'Content-Type':"multipart/form-data"
      },
      onUploadProgress:(e)=>{
        let percentage = Math.round((e.loaded*100)/e.total) || 0
        if(percentage<100){
          if(onProgress){
            updateFileLists(_file,{percentage:percentage,status:'uploading'})
            onProgress(percentage,file)
          }
        }
      }
    }).then(res=>{
      if(onSuccess){
        updateFileLists(_file,{status:'success',response:res.data})
        onSuccess(res.data,file)
      }
      if(onChange){
        onChange(file)
      }
    }).catch(err=>{
      if(onError){
        onError(err,file)
      }
      if(onChange){
        onChange(file)
      }
    })
  }
  // 上传文件
  const uploadFiles = (files:FileList)=>{
    let postFiles = Array.from(files)
    postFiles.forEach(file=>{
      if(!beforeUpload){
        post(file)
      }else{
        let result = beforeUpload(file)
        if(result && result instanceof Promise){
          result.then(file=>{
            post(file)
          })
        }else if(result !== false){
          post(file)
        }
      }
      
    })
  }

  // input的change事件
  const handleInputChange = (e:ChangeEventInput) =>{
    let files = e.target.files
    console.log(files,'files')
    if(files){
      uploadFiles(files)
    }
 
  }
  console.log(fileLists,'文件列表')
  return(
    <>
      <input type="file" style={{display:'none'}} ref={inputNode} onChange={(e:ChangeEventInput) => handleInputChange(e)}/>
      <Button btnType="primary" onClick={() => handleClick()}>按钮</Button>
    </>
  )
}

export default Upload
