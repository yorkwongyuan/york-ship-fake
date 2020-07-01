import "@testing-library/jest-dom/extend-expect"
import React from 'react'
import {render,RenderResult,fireEvent,wait} from '@testing-library/react'
import Upload,{UploadProps} from './upload'
import axios from 'axios'
let testProps:UploadProps = {
  action:'www.fake.com',
  onSuccess:jest.fn(),
  onChange:jest.fn()
}
// jest.mock('../Icon/icon', () => {
//   return ({icon, onClick}) => {
//     return <span onClick={onClick}>{icon}</span>
//   }
// })
jest.mock('axios')
let mockedAxios = axios as jest.Mocked<typeof axios>

let wrapper:RenderResult,fileInput:HTMLInputElement,uploadArea:HTMLElement
let testFiles = new File(['xyz'],'test.png',{type:"image/png"})

describe('test the upload',()=>{
  beforeEach(()=>{
    wrapper = render(<Upload {...testProps}>click to upload</Upload>)
    fileInput = wrapper.container.querySelector('.file-input') as HTMLInputElement
    uploadArea = wrapper.getByText('click to upload')
  })

  it('basic function', async ()=>{
    let {queryByText} = wrapper
    mockedAxios.post.mockResolvedValue({'data':'cool'})
  
    expect(queryByText('click to upload')).toBeInTheDocument()
    expect(fileInput).not.toBeVisible()
    fireEvent.change(fileInput,{target:{files:[testFiles]}})
    expect(queryByText('spinner')).toBeInTheDocument()
    await wait(() => {
      expect(queryByText('test.png')).toBeInTheDocument()
    })
    // fireEvent.change(fileInput,{target:{files:[testFiles]}})
    // mockedAxios.post.mockResolvedValue(()=>{
    //   return Promise.resolve({'data':'cool'})
    // })
   

  })
})