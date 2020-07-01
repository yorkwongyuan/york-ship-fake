import React, { FC ,ChangeEvent} from 'react'
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

  // change
  const handleChange = (e:ChangeEvent<HTMLInputElement>) =>{
    const value = e.target.value.trim()

    if(value){
      let result = fetchSuggestion(value)
    }
  }
  return (
    <>
    <div>
      <Input onChange={handleChange}/>
    </div>
    </>
  )
}


export default AutoComplete