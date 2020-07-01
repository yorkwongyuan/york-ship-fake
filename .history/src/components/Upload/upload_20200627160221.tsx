import React,{FC,useRef,ChangeEvent,useState} from 'react'

import UploadList from './upload-list'
import Dragger from './dragger'
import axios from 'axios'

export type FileStatus = 'ready' | 'uploading' | 'success' | 'error'

// 单个文件的数据对象
export interface UploadFile{
  uid:string;
  name:string;
  size:number;
  raw?:File;
  percentage: number;
  status: FileStatus;
  response?:any;
  error?:any;
}
// 上传组件的props
export interface UploadProps{
  action:string;
  onSuccess?:(data:any,file:UploadFile)=>void;
  onError?:(err:any,file:UploadFile)=>void;
  onProgress?:(percentage:number,file:UploadFile)=>void;
  beforeUpload?:(file:UploadFile)=> boolean | Promise<File>;
  onChange?:(file:UploadFile) => void;
  onRemove?:(file:UploadFile)=>void;
  defaultFileLists?:UploadFile[];
  name?:string;
  headers?:{[key:string]:any};
  data?:{[key:string]:any};
  withCredentials?:boolean;
  accept?:string;
  multiple?:boolean;
  drag?:boolean;
}


type ChangeEventInput = ChangeEvent<HTMLInputElement>
export const Upload:FC<UploadProps> = (props)=>{
  const inputNode = useRef<HTMLInputElement>(null)
  const {
    action,
    defaultFileLists,
    withCredentials,
    name,
    headers,
    data,
    accept,
    multiple,
    children,
    drag,
    onProgress,
    onSuccess,
    onError,
    beforeUpload,
    onChange,
    onRemove,
  } = props
  const [fileLists,setFileLists] = useState<UploadFile[]>(defaultFileLists || [])

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
  const post = (file:UploadFile) => {
    let formData = new FormData()
    formData.append(name || 'file',file.raw as File)
    // 如果用户设置了传入的参数
    if(data){
      Object.keys(data).forEach(key=>{
        formData.append(key,data[key])
      })
    }
    axios.post(action,formData,{
      headers:{
        ...headers,
        'Content-Type':"multipart/form-data"
      },
      withCredentials,
      onUploadProgress:(e)=>{
        let percentage = Math.round((e.loaded*100)/e.total) || 0
        if(percentage<100){
          if(onProgress){
            updateFileLists(file,{percentage:percentage,status:'uploading'})
            onProgress(percentage,file)
          }
        }
      }
    }).then(res=>{
      if(onSuccess){
        updateFileLists(file,{status:'success',response:res.data})
        onSuccess(res.data,file)
      }
      if(onChange){
        onChange(file)
      }
    }).catch(err=>{
      if(onError){
        updateFileLists(file,{status:'error',error:err})
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
      let _file:UploadFile = {
        uid:Date.now() + 'file-uid',
        name:file.name,
        status:'ready',
        size:file.size,
        percentage:0,
        raw:file
      }
      setFileLists(prevList=>{
        return [_file,...prevList]
      })
      if(!beforeUpload){
        post(_file)
      }else{
        let result = beforeUpload(_file)
        if(result && result instanceof Promise){
          result.then(file=>{
            post(_file)
          })
        }else if(result !== false){
          post(_file)
        }
      }
      
    })
  }
  // 删除文件列表
  const handleRemove = (file:UploadFile) =>{
    setFileLists(prevLists=>{
      return prevLists.filter(item => item.uid !== file.uid)
    })
    if(onRemove){
      onRemove(file)
    }
  }
  // input的change事件
  const handleInputChange = (e:ChangeEventInput) =>{
    let files = e.target.files
    if(files){
      uploadFiles(files)
    }
  }
  console.log(fileLists,'文件列表')
  return(
    <>
    <div onClick={() => handleClick()}>
      <input 
        type="file" 
        style={{display:'none'}} 
        ref={inputNode} 
        onChange={(e:ChangeEventInput) => handleInputChange(e)}
        multiple={multiple}
        accept={accept}
      />
      {drag ?
        <Dragger onFile={uploadFiles}>
          {children}
        </Dragger>
        :
        {children}
      }
      {children}
      <UploadList fileLists={fileLists} onRemove={handleRemove}/>
    </div>
    </>
  )
}
Upload.defaultProps = {
  name:'file-haha',
  drag:false
}

export default Upload
