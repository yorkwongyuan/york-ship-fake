import React from 'react'
import { storiesOf, action } from '@storybook/react';
import AutoCompleteInput from './AutoCompleteInput'

const AutoCompleteInputWithData = () => {
  let arr = ['nigel', 'york', 'robin', 'naresh']
  let querySearch = (query: string) => {
    return arr.filter(item => item.includes(query))
  }

  const renderOption = (str: string) => (
    <div>
      <h2>标题</h2>
      {str}
    </div>
  )

  return <AutoCompleteInput fetchSuggestions={querySearch} renderOption={renderOption} onSelect={action('clicked')} />
}

storiesOf('AutoComplete组件测试', module)
  .add('AutoCompleteInput', AutoCompleteInputWithData)