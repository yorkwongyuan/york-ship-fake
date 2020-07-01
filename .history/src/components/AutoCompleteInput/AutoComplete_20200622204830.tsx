import  React,{ FC,ChangeEvent,ReactElement,useState } from 'react'
import Input,{InputProps} from '../Input/input'

interface AutoCompleteProps extends Omit<InputProps,'onSelect'>{
  onSelect?:(str:string)=>void;
  fetchSuggestion:(str:string) => string[];
  renderOptions?:(str:string) => ReactElement
}

export const AutoComplete:FC<AutoCompleteProps> = (props) =>{
const {onSelect,fetchSuggestion,value,renderOptions,...restProps} = props
let [inputValue,setInputValue] = useState(value)
let [suggestions,setSuggestion] = useState<string[]>([])



const handleChange = (e:ChangeEvent<HTMLInputElement>) =>{
  let value = e.target.value.trim()
  setInputValue(value)
  let result = fetchSuggestion(value)
  setSuggestion(result)
}

const renderChild = (item) =>{
return (
<>

</>)
}


return (
  <>
  <Input onChange={handleChange} {...restProps}/>
  </>
)
}

export default AutoComplete