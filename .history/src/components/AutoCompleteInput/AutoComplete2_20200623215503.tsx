import React, { FC ,ChangeEvent,useState,ReactElement} from 'react'
import Input,{InputProps} from '../Input/input'
import { DateSourceType } from './AutoComplete'

interface DataSource {
  value:string
}

type DataSourceType<T = {}> = DataSource & T

interface AutoCompleteProps extends Omit<InputProps,'onSelect'>{
  fetchSuggestion:(str:string) => DataSourceType[] | Promise<DataSourceType[]>;
  onSelect:(str:DataSourceType) => void;
  renderOption:(str:DataSource) => ReactElement
}

export const AutoComplete:FC<AutoCompleteProps> = (props) =>{
  const {fetchSuggestion,onSelect} = props
  const [suggestions,setSuggestions] = useState<DateSourceType[]>([])
  const [inputValue,setInputValue] = useState('')
  // change
  const handleChange = (e:ChangeEvent<HTMLInputElement>) =>{
    const value = e.target.value.trim()

    if(value){
      let result = fetchSuggestion(value)
      if(result instanceof Promise){
        result.then(data=>{
          setSuggestions(data)
        })
      }else{
        setSuggestions(result)
      }
      setInputValue(value)
    }
  }

  const renderOptions = () =>{
    return (
      <>
        {suggestions.map(item =>{
          return 
        })}
      </>
    )
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