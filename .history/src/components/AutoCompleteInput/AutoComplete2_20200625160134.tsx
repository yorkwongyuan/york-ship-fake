import React, { FC ,ChangeEvent,useState,ReactElement,useEffect,KeyboardEvent,useRef} from 'react'
import Input,{InputProps} from '../Input/input'
import Icon from '../Icon/icon'
import useDebounce from '../../hooks/useDebounce'
import useClickoutside from '../../hooks/useClickoutside'
import ClassNames from 'classnames'
interface DataSource {
  value:string
}

export type DataSourceType<T = {}> = DataSource & T

export interface AutoCompleteProps extends Omit<InputProps,'onSelect'>{
  fetchSuggestion:(str:string) => DataSourceType[] | Promise<DataSourceType[]>;
  onSelect:(str:DataSourceType) => void;
  renderOption?:(str:DataSource) => ReactElement
}

export const AutoComplete:FC<AutoCompleteProps> = (props) =>{
  const {fetchSuggestion,onSelect,renderOption,value,...restProps} = props
  const [suggestions,setSuggestions] = useState<DataSourceType[]>([])
  const [inputValue,setInputValue] = useState(value as string)
  const [isLoading,setIsLoading] = useState(false)
  const [highLight,setHighLight] = useState(-1)
  const componentRef = useRef<HTMLDivElement>(null)
  useClickoutside(componentRef,()=>{setSuggestions([])})
  let trigger = useRef(false)
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
    trigger.current = true
  }

  const hanldeClick = (params:DataSourceType) =>{
    if(onSelect){
      onSelect(params)
    }
    setInputValue(params.value)
    setSuggestions([])
    setHighLight(-1)
    trigger.current = false
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
        if(suggestions[highLight]){
          hanldeClick(suggestions[highLight])
        }
        break;
      case 38:
        highLightFunc(highLight-1)
        break;
      case 40:
        highLightFunc(highLight+1)
        break;
      default:
        break;      
    }
  }

  const renderChild = () =>{
    return (
      <>
      <ul>
      {suggestions.map((item,index) =>{
          let cnames = ClassNames('suggestion-item',{
            'is-active':index === highLight
          })
          return (
            <li onClick={() => hanldeClick(item)} className={cnames} key={index}>
              {renderOption ? renderOption(item) : item.value}
            </li>
          )
        })}
      </ul>
       
      </>
    )
  }
  return (
    <>
    <div ref={componentRef}>
      <Input onChange={handleChange} value={inputValue} onKeyDown={handleKeyDown} {...restProps}/>
      {isLoading && <Icon icon="spinner" spin/>}
     {suggestions.length>0 && renderChild()}
    </div>
    </>
  )
}


export default AutoComplete;