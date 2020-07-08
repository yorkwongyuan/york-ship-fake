import React from 'react'
import {storiesOf} from '@storybook/react'

storiesOf('welcome page',module)
.add('welcome',()=>{
  return (
    <>
      欢迎光临这是一个组件库
    </>
  )
},{info:{disable:true}})