import React,{useState} from 'react'
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import AutoCompleteInput,{DateSourceType} from './AutoComplete'
import Icon from '../Icon/icon'
interface DataListsProps{
  name:string;
  num:number
}

const AutoCompleteInputWithData = () => {
  // let querySearch = (query: string) => {
  //   return arr.filter(item => item.name.includes(query))
  // }
  let [loading,setLoading] = useState(false)
  let querySearch = (query: string) => {
    setLoading(true)
    return fetch(`https://api.github.com/search/users?q=${query}`)
    .then(res=>res.json())
    .then(({items})=>{
      setLoading(false)
      console.log(items,'items')
      return items.slice(0,10).map(item=>({value:item.login,...item}))
    })
  }
  const renderOption = (item: DateSourceType) => { // 注意,此处不可使用泛型,要在下一行使用
    const itemObj = item as DateSourceType<DataListsProps>
    return (
      <div>
        <h2>标题</h2>
        <p>姓名:{itemObj.name}</p>
        <p>序号:{itemObj.num}</p>
        <p>{itemObj.value}</p>
      </div>
    )
  }

  return <AutoCompleteInput fetchSuggestion={querySearch} renderOption={renderOption} onSelect={action('clicked')} />
}

storiesOf('AutoComplete组件测试', module)
  .add('AutoCompleteInput', AutoCompleteInputWithData)