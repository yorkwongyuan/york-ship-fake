import React, { FC ,ChangeEvent,useState,ReactElement,useEffect,KeyboardEvent} from 'react'
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
  const [highLight,setHighLight] = useState(0)
  let debounceValue = useDebounce(inputValue,500)

  useEffect(()=>{
    if(debounceValue){
      let result = fetchSuggestion(debounceValue)
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
  },[fetchSuggestion, debounceValue])
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
  // 控制高亮index函数
  const highLightFunc = (index:number) =>{
    if(index<0) index = 0;
    if(index >= suggestions.length) index = suggestions.length -1
    setHighLight(index)
  }
  // 键盘点击事件
  const handleKeyDown = (e:KeyboardEvent) =>{
    switch(e.keyCode){
      case 13:
        break;
      case 38:
        highLightFunc(highLight+1)
        break;
      case 40:
        break;
      default:
        break;      
    }
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
      <Input onChange={handleChange} value={inputValue} onKeyDown={handleKeyDown}/>
      {isLoading && <Icon icon="spinner" spin/>}
      {suggestions.length>0 && renderChild()}
    </div>
    </>
  )
}


export default AutoComplete;