import "@testing-library/jest-dom/extend-expect"
import React from 'react'
import {render,RenderResult} from '@testing-library/react'
import Upload,{UploadProps} from './upload'

let testProps:UploadProps = {
  action:'www.fake.com',
  onSuccess:jest.fn(),
  onChange:jest.fn()
}
let wrapper:RenderResult,fileInput:HTMLInputElement,uploadArea:HTMLElement

describe('test the upload',()=>{
  beforeEach(()=>{
    wrapper = render(<Upload {...testProps}>click to upload</Upload>)
    fileInput = wrapper.container.querySelector('.fileInput') as HTMLInputElement
    uploadArea = wrapper.getByText('click to upload')
  })
  it('basic function',()=>{
    let {queryByText} = wrapper
    expect(queryByText('click to upload')).toBeInTheDocument()
  })
})