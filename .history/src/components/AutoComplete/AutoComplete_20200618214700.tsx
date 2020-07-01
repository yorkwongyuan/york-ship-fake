import React, { FC, useState, ChangeEvent } from 'react'
import Input, { InputProps } from '../Input/input'
interface AutoCompleteProps extends Omit<InputProps, 'onSelect'> {
  fetchSuggestions: (str: string) => string[];
  onSelect: () => void;
}


export const AutoCompleteInput: FC<AutoCompleteProps> = (props) => {
  const { onSelect, value, fetchSuggestions } = props
  const [inputValue, setInputValue] = useState(value)
  const [suggestations, setSuggestations] = useState<string[]>([])
  // onChange事件
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.trim()
    setInputValue(value)
    if (value) {
      let result = fetchSuggestions(value)
      setSuggestations(result)
    }
  }
  return (
    <div>
      <Input onChange={handleChange} />
    </div>
  )
}

export default AutoCompleteInput