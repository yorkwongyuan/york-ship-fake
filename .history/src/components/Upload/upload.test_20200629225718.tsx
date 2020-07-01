import "@testing-library/jest-dom/extend-expect"
import React from 'react'
import axios from 'axios'
import {render,RenderResult,fireEvent,wait} from '@testing-library/react'
import Upload,{UploadProps,UploadFile} from './upload'
let testProps:UploadProps = {
  action:'www.fake.com',
  onSuccess:jest.fn(),
  onChange:jest.fn()
}
jest.mock('../Icon/icon', () => {
  return ({icon, onClick}) => {
    return <span onClick={onClick}>{icon}</span>
  }
})
jest.mock('axios')
let mockedAxios = axios as jest.Mocked<typeof axios>

let wrapper:RenderResult,fileInput:HTMLInputElement,uploadArea:HTMLElement
// let testFiles = new File(['xyz'],'test.png',{type:"image/png"})
const testFiles = new File(['xyz'], 'test.png', {type: 'image/png'})
let testUploadFile:UploadFile = {
  name:testFiles.name,
  percentage:0,
  raw:testFiles,
  size:testFiles.size,
  status:'ready',
  uid:new Date().getTime() + 'file-uid'
}
describe('test the upload',()=>{
  beforeEach(()=>{
    wrapper = render(<Upload {...testProps}>click to upload</Upload>)
    fileInput = wrapper.container.querySelector('.input-file') as HTMLInputElement
    uploadArea = wrapper.getByText('click to upload')
  })

  it('basic function', async ()=>{
    let {queryByText} = wrapper
   
    mockedAxios.post.mockResolvedValue({'data':'cool'})
  
    expect(queryByText('click to upload')).toBeInTheDocument()
    expect(fileInput).not.toBeVisible()
    expect(uploadArea).toBeInTheDocument()
    fireEvent.change(fileInput,{target:{files:[testFiles]}})
    expect(queryByText('file-alt')).toBeInTheDocument()
    await wait(() => {
      expect(queryByText('test.png')).toBeInTheDocument()
    })
    expect(queryByText('check-circle')).toBeInTheDocument()
    expect(testProps.onSuccess).toHaveBeenCalledWith('cool',testFiles)
  })
})