import  React,{ FC,ChangeEvent,ReactElement,useState } from 'react'
import Input,{InputProps} from '../Input/input'

interface AutoCompleteProps extends Omit<InputProps,'onSelect'>{
  onSelect?:(str:string)=>void;
  fetchSuggestion?:(str:string) => string[];
  renderOptions?:(str:string) => ReactElement
}

const AutoComplete:FC<AutoCompleteProps> = (props) =>{
const {onSelect,fetchSuggestion,value} = props
let [inputValue,setInputValue] = useState(value)
const handleChange = (e:ChangeEvent<HTMLInputElement>) =>{
  let value = e.target.value.trim()
  if(fetchSuggestion){
    let result = fetchSuggestion(value)
  }
 
}
return (
  <>
  <Input />
  </>
)
}

export default AutoComplete