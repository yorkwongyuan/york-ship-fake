import {render} from '@testing-library/react'
import AutoComplete,{AutoCompleteProps} from './AutoComplete2'

let testArr = [{name:'york',id:1},{name:'nigel',id:2}]
let testProps:AutoCompleteProps = {
  fetchSuggestion:(query) => 
}