import {storiesOf} from '@storybook/react'
import {action} from '@storybook/addon-actions'
import React from 'react'
import Upload from '../Upload/upload'

// 校验文件大小
const beforeUploadFunc = (file:File) =>{
  if(Math.round(file.size/1024) > 10){
    alert('too big file')
    return false
  }
  return true
}

// 使用Promise转换文件

const beforeUploadPromise = (file:File) =>{
  let newFile = new File([file],'new_file_name',{type:file.type})
  return Promise.resolve(newFile)
}
const uploadFunc = () =>{
return <Upload 
  action="https://jsonplaceholder.typicode.com/posts" 
  onProgress={action('progress')}
  onSuccess={action('success')}
  onError={action('error')}
  onChange={action('onchange')}
  beforeUpload={beforeUploadFunc}
  />
}
storiesOf('Upload 组件',module)
.add('Upload',uploadFunc)