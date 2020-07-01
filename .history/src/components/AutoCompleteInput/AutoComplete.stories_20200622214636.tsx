import React from 'react'
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import AutoCompleteInput,{DateSourceType} from './AutoComplete'
interface DataListsProps{
  name:string;
  num:number
}

const AutoCompleteInputWithData = () => {
  // let arr = ['nigel', 'york', 'robin', 'naresh']
let arr = [{name:'york',num:1,value:'good'}]
  let querySearch = (query: string) => {
    return arr.filter(item => item.name.includes(query))
  }

  const renderOption = (item: DateSourceType) => {
    item = item as DateSourceType<DataListsProps>
    return (
      <div>
        <h2>标题</h2>
        <p>姓名:{item.name}</p>
        <p>序号:{item.num}</p>
        <p>{item.value}</p>
      </div>
    )
  }

  return <AutoCompleteInput fetchSuggestion={querySearch} renderOption={renderOption} onSelect={action('clicked')} />
}

storiesOf('AutoComplete组件测试', module)
  .add('AutoCompleteInput', AutoCompleteInputWithData)