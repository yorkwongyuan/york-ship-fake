import {storiesOf} from '@storybook/react'
import {action} from '@storybook/addon-actions'
import React from 'react'
import Upload,{UploadFile} from '../Upload/upload'

let defaultFileLists:UploadFile[] = [
  {name:'一号文件',status:"success",uid:'123123',size:20,percentage:12},
  {name:'二号文件',status:"success",uid:'112',size:10,percentage:30},
  {name:'三号文件',status:"success",uid:'112',size:10,percentage:30},
]
// 校验文件大小
const beforeUploadCheckSize = (file:File) =>{
  if(Math.round(file.size/1024) > 10){
    alert('too big file')
    return false
  }
  return true
}

// 使用Promise转换文件
const beforeUploadPromise = (file:File) =>{
  let newFile = new File([file],`new_file_name.png`,{type:file.type})
  return Promise.resolve(newFile)
}
const uploadFunc = () =>{
return <Upload
  action="https://jsonplaceholder.typicode.com/posts" 
  onProgress={action('progress')}
  onSuccess={action('success')}
  onError={action('error')}
  onChange={action('onchange')}
  beforeUpload={beforeUploadPromise}

  />
}
storiesOf('Upload 组件',module)
.add('Upload',uploadFunc)