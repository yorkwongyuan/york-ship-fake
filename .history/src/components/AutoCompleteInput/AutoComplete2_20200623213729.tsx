import React, { FC } from 'react'
import Input,{InputProps} from '../Input/input'

interface DataSource {
  value:string
}

type DataSourceType<T = {}> = DataSource & T

interface AutoCompleteProps extends Omit<InputProps,'onSelect'>{
  fetchSuggestion:(str:DataSourceType) => DataSourceType[];
  onSelect:(str:DataSourceType) => void;

}

export const AutoComplete:FC<AutoCompleteProps> = (props) =>{
  const {fetchSuggestion,onSelect} = props

  return (
    <>
<div>
  
</div>
    </>
  )
}


export default AutoComplete