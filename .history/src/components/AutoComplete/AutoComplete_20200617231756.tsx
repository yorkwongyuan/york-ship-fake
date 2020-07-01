import React, { ChangeEvent, FC, useState } from 'react'
import Input, { InputProps } from '../Input/input'

interface AutoCompleteProps extends Omit<InputProps, 'onSelect'> {
  onSelect: (e: string) => void;
  fetchSuggestion: (str: string) => string[]
}

export const AutoComplete: FC<AutoCompleteProps> = (props) => {
  let { fetchSuggestion, onSelect, value, ...restProps } = props

  const [inputValue, setInputValue] = useState(value)
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {

  }
  return (
    <Input onChange={handleChange}></Input>
  )
}

export default AutoComplete