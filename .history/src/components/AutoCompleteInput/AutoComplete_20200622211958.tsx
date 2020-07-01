import  React,{ FC,ChangeEvent,ReactElement,useState } from 'react'
import Input,{InputProps} from '../Input/input'

interface DataSource{
  value:string;
}

type DateSourceType<T = {}> = T & DataSource;


interface AutoCompleteProps extends Omit<InputProps,'onSelect'>{
  onSelect?:(str:DateSourceType)=>void;
  fetchSuggestion:(str:string) => DateSourceType[];
  renderOption?:(str:DateSourceType) => ReactElement
}

export const AutoComplete:FC<AutoCompleteProps> = (props) =>{
const {onSelect,fetchSuggestion,value,renderOption,...restProps} = props
let [inputValue,setInputValue] = useState(value)
let [suggestions,setSuggestion] = useState<DateSourceType[]>([])

const handleChange = (e:ChangeEvent<HTMLInputElement>) =>{
  let value = e.target.value.trim()
  setInputValue(value)
  if(value){
    let result = fetchSuggestion(value)
    setSuggestion(result)
  }else{
    setSuggestion([])
  }

}

const handleClick = (value:string) =>{
  if(onSelect){
    onSelect(value)
  }
  setInputValue(value)
  setSuggestion([])
}

const renderChild = () =>{
  return (
  <>
  <ul>
  {suggestions.map((item,index)=>{
    return <li key={index} onClick={()=>handleClick(item)}>{renderOption ? renderOption(item) :item}</li>
  })}
  </ul>
  </>)
  }


return (
  <>
  <Input onChange={handleChange} {...restProps} value={inputValue}/>
  {setSuggestion.length>0 ?renderChild():''}
  </>
)
}


export default AutoComplete;