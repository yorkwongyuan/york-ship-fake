import React from 'react'
import Input,{InputProps} from '../Input/input'

interface DataSource {
  value:string
}

interface AutoCompleteProps extends Omit<InputProps,'onSelect'>{
fetchSuggestion:()
}