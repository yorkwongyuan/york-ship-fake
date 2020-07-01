import {storiesOf} from '@storybook/react'
import React from 'react'
import Upload from '../Upload/upload'
const uploadFunc = () =>{
return <Upload action="https://jsonplaceholder.typicode.com/posts"/>
}
storiesOf('Upload 组件',module)
.add('Upload',uploadFunc)