import {storiesOf} from '@storybook/react'
import {action} from '@storybook/addon-actions'
import React from 'react'
import Upload from '../Upload/upload'

// 校验文件大小
const beforeUploadFunc = (file:File) =>{
  if(Math.round(file.size/1024) > 10){
    return false
  }
  return true
}
const uploadFunc = () =>{
return <Upload 
  action="https://jsonplaceholder.typicode.com/posts" 
  onProgress={action('progress')}
  onSuccess={action('success')}
  onError={action('error')}
  />
}
storiesOf('Upload 组件',module)
.add('Upload',uploadFunc)