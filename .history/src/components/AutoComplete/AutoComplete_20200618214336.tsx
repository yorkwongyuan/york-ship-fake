import React, { FC, useState, ChangeEvent } from 'react'
import Input, { InputProps } from '../Input/input'
interface AutoCompleteProps extends Omit<InputProps, 'onSelect'> {
  fetchSuggestions: (str: string) => string[];
  onSelect: () => void;
}


const AutoCompleteInput: FC<AutoCompleteProps> = (props) => {
  const { onSelect, value, fetchSuggestions } = props
  const [inputValue, setInputValue] = useState(value)

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.trim()
    setInputValue(value)
    if (value) {
      let result = fetchSuggestions(value)
    }
  }
  return (
    <div>
      <Input onChange={handleChange} />
    </div>
  )
}