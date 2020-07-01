import "@testing-library/jest-dom/extend-expect"
import React from 'react'
import {render,RenderResult} from '@testing-library/react'
import Upload,{UploadProps} from './upload'

let testProps:UploadProps = {
  action:'www.fake.com'
}
let wrapper:RenderResult,fileInput:HTMLInputElement,uploadArea:HTMLElement
describe('test the upload',()=>{
  beforeEach(()=>{
    wrapper = render(<Upload {...testProps}/>)
    fileInput = wrapper.container.querySelector('.fileInput')
  })
})