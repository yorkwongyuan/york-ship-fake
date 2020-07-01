import {storiesOf} from '@storybook/react'
import {action} from '@storybook/addon-actions'
import React from 'react'
import Upload,{UploadFile} from '../Upload/upload'

let defaultFileLists:UploadFile[] = [
  // {name:'一号文件',status:"uploading",uid:'123123',size:20,percentage:12},
  // {name:'二号文件',status:"uploading",uid:'112',size:10,percentage:30},
  // {name:'三号文件',status:"uploading",uid:'888888',size:10,percentage:90},
]
// 校验文件大小
const beforeUploadCheckSize = (file:File) =>{
  if(Math.round(file.size/1024) > 1000){
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

// 删除文件列表的回调
const handleRemove = (file:UploadFile) =>{
console.log(file,'file')
}

const uploadFunc = () =>{
return <Upload
  name="fileName"
  data={{'name':'york'}}
  headers={{'X-Powered-By':'york'}}
  accept=".jpg"
  multiple={true}
  action="https://www.mocky.io/v2/5cc8019d300000980a055e76" 
  onProgress={action('progress')}
  onSuccess={action('success')}
  onError={action('error')}
  onChange={action('onchange')}
  beforeUpload={beforeUploadCheckSize}
  defaultFileLists={defaultFileLists}
  onRemove={handleRemove}
  />
}
storiesOf('Upload 组件',module)
.add('Upload',uploadFunc)