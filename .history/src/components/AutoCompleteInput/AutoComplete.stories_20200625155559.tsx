import React from 'react'
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import AutoCompleteInput,{DataSourceType} from './AutoComplete2'

interface DataListsProps{
  name:string;
  num:number
}

const AutoCompleteWithAsyncData = () => {
  let querySearch = (query: string) => {
    return fetch(`https://api.github.com/search/users?q=${query}`)
    .then(res=>res.json())
    .then(({items})=>{
      console.log(items,'items')
      return items.slice(0,10).map(item=>({value:item.login,...item}))
    })
  }
  const renderOption = (item: DataSourceType) => { // 注意,此处不可使用泛型,要在下一行使用
    const itemObj = item as DataSourceType<DataListsProps>
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

const AutoCompleteWithSyncData = () =>{


  return (
    <>
AutoComplete
    </>
  )
}

storiesOf('AutoComplete组件测试', module)
  .add('AutoCompleteInput', AutoCompleteWithAsyncData)