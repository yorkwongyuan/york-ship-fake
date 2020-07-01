import  React,{ FC,ChangeEvent,ReactElement } from 'react'
import Input,{InputProps} from '../Input/input'

interface AutoCompleteProps extends Omit<InputProps,'onSelect'>{
  onSelect?:(str:string)=>void;
  fetchSuggestion?:(str:string) => string[];
  renderOptions?:(str:string) => ReactElement
}

const AutoComplete:FC<AutoCompleteProps> = (props) =>{
const {onSelect,fetchSuggestion} = props
const handleChange = (e:ChangeEvent<HTMLInputElement>) =>{
  let value = e.target.value.trim()
}
return (
  <>
  <Input />
  </>
)
}

export default AutoComplete