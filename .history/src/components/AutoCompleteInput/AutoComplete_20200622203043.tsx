import  { FC,ChangeEvent,ReactElement } from 'react'
import Input,{InputProps} from '../Input/input'

interface AutoCompleteProps extends Omit<InputProps,'onSelect'>{
  onSelect?:(str:string)=>void;
  fetchSuggestion?:(str:string) => string[];
  renderOptions?:(str:string) => ReactElement
}

const AutoComplete:FC<AutoCompleteProps> = (props) =>{
const {onSelect,fetchSuggestion} = props
return (
  <>
  <Input />
  </>
)
}