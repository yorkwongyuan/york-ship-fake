import React from 'react'
import { storiesOf } from '@storybook/react';
import AutoCompleteInput from './AutoCompleteInput'

const AutoCompleteInputWithData = () => {
  let arr = ['nigel', 'york', 'robin', 'naresh']
  let querySearch = (query: string) => {
    return arr.filter(item => item.includes(query))
  }

  const renderOption = (str: string) => (
    <div>
      {str}
    </div>
  )

  return <AutoCompleteInput fetchSuggestions={querySearch} />
}

storiesOf('AutoComplete组件测试', module)
  .add('AutoCompleteInput', AutoCompleteInputWithData)