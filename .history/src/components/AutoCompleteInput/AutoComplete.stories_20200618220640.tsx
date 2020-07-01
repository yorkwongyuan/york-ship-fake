import { storiesOf } from '@storybook/react';
import AutoCompleteInput from './AutoCompleteInput'

const AutoCompleteInputWithData = () => {
  let arr = ['nigel', 'york', 'robin', 'naresh']
  let querySearch = (query: string) => {
    return arr.filter(item => arr.includes(item))
  }
}