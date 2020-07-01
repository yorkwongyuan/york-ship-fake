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
    fireEvent.change(inputNode,{target:{value:'y'}})
    await wait(()=>{
      expect(wrapper.queryByText('york')).toBeInTheDocument()
    })
    expect(wrapper.container.querySelectorAll('.suggestion-item').length).toEqual(1)
  })
})