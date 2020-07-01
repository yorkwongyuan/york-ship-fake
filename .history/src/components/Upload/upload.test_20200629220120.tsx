import "@testing-library/jest-dom/extend-expect"
import React from 'react'
import {render,RenderResult,fireEvent} from '@testing-library/react'
import Upload,{UploadProps} from './upload'
import axios from 'axios'
let testProps:UploadProps = {
  action:'www.fake.com',
  onSuccess:jest.fn(),
  onChange:jest.fn()
}

jest.mock('axios')

let mockedAxios = axios as jest.Mocked<typeof axios>

let wrapper:RenderResult,fileInput:HTMLInputElement,uploadArea:HTMLElement

describe('test the upload',()=>{
  beforeEach(()=>{
    wrapper = render(<Upload {...testProps}>click to upload</Upload>)
    fileInput = wrapper.container.querySelector('.file-input') as HTMLInputElement
    uploadArea = wrapper.getByText('click to upload')
  })
  it('basic function',()=>{
    let {queryByText} = wrapper
    let testFiles = new File(['xyz'],'test.png',{type:"image/png"})
    expect(queryByText('click to upload')).toBeInTheDocument()
    expect(fileInput).not.toBeVisible()
    fireEvent.change(fileInput,{target:{files:[testFiles]}})
    mockedAxios.post.mockResolvedValue(()=>{
      return Promise.resolve({'data':'cool'})
    })
  })
})