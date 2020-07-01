import {render,renderResult} from '@testing-library/react'
import AutoComplete,{AutoCompleteProps} from './AutoComplete2'

let testArr = [{name:'york',value:'1'},{name:'nigel',value:'2'}]
let testProps:AutoCompleteProps = {
  fetchSuggestion:(query) => testArr.filter(item => item.name.includes(query)),
  onSelect:jest.fn()
}

let wrapper:renderResult,inputNode:HTMLInputElement