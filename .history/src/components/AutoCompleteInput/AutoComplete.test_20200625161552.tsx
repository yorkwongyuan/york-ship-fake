import React from 'react'
import {render,RenderResult,fireEvent,wait} from '@testing-library/react'
import AutoComplete,{AutoCompleteProps} from './AutoComplete'

let testArr = [{name:'11',value:'york'},{name:'22',value:'yi'}]
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

  // 基本功能测试
  it('test the basic function',async ()=>{
    // 输入文字
    fireEvent.change(inputNode,{target:{value:'y'}})
    // 由于使用了函数防抖,所以有延迟300ms
    await wait(()=>{
      expect(wrapper.queryByText('york')).toBeInTheDocument()
    })
    // 出现的联想节点为1个
    expect(wrapper.container.querySelectorAll('.suggestion-item').length).toEqual(2)
    // 点击联想的节点
    fireEvent.click(wrapper.queryByText('york') as HTMLElement) // queryByText可能会找不到,但是getByText一定有
    // onSelect方法触发,传参为{name:'11',value:'york'}
    expect(testProps.onSelect).toBeCalledWith({name:'11',value:'york'})
    // 联想框消失
    expect(wrapper.queryByText('york')).not.toBeInTheDocument()
    // 输入框的值为york
    expect(inputNode.value).toBe('york')
  })

  // 键盘事件测试
  it('support keyboard event',async ()=>{
    // 例行输入
    fireEvent.change(inputNode,{target:{value:'y'}})
    await wait(()=>{
      expect(wrapper.queryByText('york')).toBeInTheDocument()
    })
    // 联想第一行
    let firstResult = wrapper.getByText('york')
    // 联想第二行
    let secondResult = wrapper.getByText('yi')
    // 向下移动
    fireEvent.keyDown(inputNode,{keyCode:40})
    expect(firstResult).toHaveClass('is-active')
    // 再向下移动
    fireEvent.keyDown(inputNode,{keyCode:40})
    expect(secondResult).toHaveClass('is-active')
    // 向上移动
    fireEvent.keyDown(inputNode,{keyCode:38})
    expect(firstResult).toHaveClass('is-active')
    // 回车
    fireEvent.keyDown(inputNode,{keyCode:13})
    expect(testProps.onSelect).toBeCalledWith({name:'11',value:'york'})
    expect(wrapper.queryByText('york')).not.toBeInTheDocument()
    expect(inputNode.value).toBe('york')

  })
})