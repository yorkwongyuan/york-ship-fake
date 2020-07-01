import React from 'react'
import Input,{InputProps} from '../Input/input'

interface DataSource {
  value:string
}

type DataSourceType<T = {}> = DataSource & T

interface AutoCompleteProps extends Omit<InputProps,'onSelect'>{
  fetchSuggestion:(str:DataSourceType) => DataSourceType[]
}