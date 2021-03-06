import React, { FC ,ChangeEvent,useState,ReactElement,useEffect} from 'react'
import Input,{InputProps} from '../Input/input'
import Icon from '../Icon/icon'
import useDebounce from '../../hooks/useDebounce'
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
  const {fetchSuggestion,onSelect,renderOption,value} = props
  const [suggestions,setSuggestions] = useState<DataSourceType[]>([])
  const [inputValue,setInputValue] = useState(value as string)
  const [isLoading,setIsLoading] = useState(false)
let debounceValue = useDebounce(inputValue)

  useEffect(()=>{
    if(inputValue){
      let result = fetchSuggestion(inputValue)
      if(result instanceof Promise){
        setIsLoading(true)
        result.then(data=>{
          setSuggestions(data)
          setIsLoading(false)
        })
      }else{
        setSuggestions(result)
      }
    }else{
      setSuggestions([])
    }
  },[fetchSuggestion, inputValue])
  // change
  const handleChange = (e:ChangeEvent<HTMLInputElement>) =>{
    const value = e.target.value.trim()
    setInputValue(value)
  }

  const hanldeClick = (params:DataSourceType) =>{
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