import React, { FC ,ChangeEvent,useState,ReactElement} from 'react'
import Input,{InputProps} from '../Input/input'
import { DateSourceType } from './AutoComplete'
import Icon from '../Icon/icon'
interface DataSource {
  value:string
}

export type DataSourceType<T = {}> = DataSource & T

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

  const hanldeClick = (params:DateSourceType) =>{
    if(onSelect){
      onSelect(params)
    }
    setInputValue(params.value)
    setSuggestions([])
  }
  const renderChild = () =>{
    return (
      <>
        {suggestions.map(item =>{
          return (
            <li onClick={() => hanldeClick(item)}>
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
      <Input onChange={handleChange} value={inputValue}/>
      {isLoading && <Icon icon="spinner" spin/>}
      {suggestions.length>0 && renderChild()}
    </div>
    </>
  )
}


export default AutoComplete;