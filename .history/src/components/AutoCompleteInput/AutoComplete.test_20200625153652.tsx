import React from 'react'
import {render,RenderResult,fireEvent,wait} from '@testing-library/react'
import AutoComplete,{AutoCompleteProps} from './AutoComplete2'

let testArr = [{name:'11',value:'york'},{name:'22',value:'nigel'}]
let testProps:AutoCompleteProps = {
  fetchSuggestion:(query) => testArr.filter(item => item.value.includes(query)),
  onSelect:jest.fn(),
  placeholder:'auto-complete'
}

let wrapper:RenderResult,inputNode:HTMLInputElement

describe('test the autocomplete',()=>{
  beforeEach(()=>{
    wrapper = render(<AutoComplete {...testProps}/>)
    inputNode = wrapper.getByPlaceholderText('auto-complete') as HTMLInputElement
  })
  it('test the basic function',async ()=>{
    // 输入文字
    fireEvent.change(inputNode,{target:{value:'y'}})
    // 由于使用了函数防抖,所以有延迟300ms
    await wait(()=>{
      expect(wrapper.queryByText('york')).toBeInTheDocument()
    })
    // 出现的联想节点为1个
    expect(wrapper.container.querySelectorAll('.suggestion-item').length).toEqual(1)
    // 点击联想的节点
    fireEvent.click(wrapper.queryByText('york') as HTMLElement) // queryByText可能会找不到,但是getByText一定有
    // onSelect方法触发,传参为{name:'11',value:'york'}
    expect(testProps.onSelect).toBeCalledWith({name:'11',value:'york',age:111})
  })
})