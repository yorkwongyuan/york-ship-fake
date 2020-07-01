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
  const {fetchSuggestion,onSelect,renderOption} = props
  const [suggestions,setSuggestions] = useState<DateSourceType[]>([])
  const [inputValue,setInputValue] = useState('')
  const [isLoading,setIsLoading] = useState(false)
  // change
  const handleChange = (e:ChangeEvent<HTMLInputElement>) =>{
    const value = e.target.value.trim()

    if(value){
      let result = fetchSuggestion(value)
      if(result instanceof Promise){
        setIsLoading(true)
        result.then(data=>{
          setSuggestions(data)
          setIsLoading(false)
        })
      }else{
        setSuggestions(result)
      }
      setInputValue(value)
    }
  }

  const renderChild = () =>{
    return (
      <>
        {suggestions.map(item =>{
          return (
            <li>
              {renderOption ? renderOption(item) : item}
            </li>
          )
        })}
      </>
    )
  }
  return (
    <>
    <div>
      <Input onChange={handleChange}/>
      {suggestions.length>0 ? renderChild():''}
    </div>
    </>
  )
}


export default AutoComplete