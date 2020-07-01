import  React,{ FC,ChangeEvent,ReactElement,useState } from 'react'
import Input,{InputProps} from '../Input/input'
import Icon from '../Icon/icon'
interface DataSource{
  value:string;
}

export type DataSourceType<T = {}> = T & DataSource;

interface AutoCompleteProps extends Omit<InputProps,'onSelect'>{
  onSelect?:(str:DataSourceType)=>void;
  fetchSuggestion:(str:string) => DataSourceType[] | Promise<DataSourceType[]>;
  renderOption?:(str:DataSourceType) => ReactElement
}

export const AutoComplete:FC<AutoCompleteProps> = (props) =>{
const {onSelect,fetchSuggestion,value,renderOption,...restProps} = props
let [inputValue,setInputValue] = useState(value)
let [suggestions,setSuggestion] = useState<DataSourceType[]>([])
let [loading,setLoading] = useState(false)


const handleChange = (e:ChangeEvent<HTMLInputElement>) =>{
  let value = e.target.value.trim()
  setInputValue(value)
  setLoading(true)
  if(value){
    let result = fetchSuggestion(value)
    // result 是一个联合类型
    if(result instanceof Promise){
      result.then(data =>{
        setLoading(false)
        setSuggestion(data)
      })
    }else{
      setSuggestion(result)
    }
  }else{
    setSuggestion([])
  }

}

const handleClick = (item:DataSourceType) =>{
  if(onSelect){
    onSelect(item)
  }
  setInputValue(item.value)
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
  {loading && <ul><Icon icon="spinner" spin/></ul>}
  {setSuggestion.length>0 ?renderChild():''}
  </>
)
}


export default AutoComplete;