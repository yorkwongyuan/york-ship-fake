import React, { ChangeEvent, FC, useState } from 'react'
import Input, { InputProps } from '../Input/input'

interface AutoCompleteProps extends Omit<InputProps, 'onSelect'> {
  onSelect: (e: string) => void;
  fetchSuggestion: (str: string) => string[]
}

export const AutoComplete: FC<AutoCompleteProps> = (props) => {
  let { fetchSuggestion, onSelect, value, ...restProps } = props

  const [inputValue, setInputValue] = useState(value)
  const [suggestations, setSuggestations] = useState<string[]>([]) // 这里的泛型注意了
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.trim()
    setInputValue(value)
    if (value) {
      let result = fetchSuggestion(value)
      setSuggestations(result)
    }
  }
  return (
    <Input onChange={handleChange}></Input>
  )
}

export default AutoComplete