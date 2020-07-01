import React, { ChangeEvent, FC } from 'react'
import Input, { InputProps } from '../Input/input'

interface AutoCompleteProps extends Omit<InputProps, 'onSelect'> {
  onSelect: (e: string) => void;
  fetchSuggestion: (str: string) => string[]
}

export const AutoComplete: FC<AutoCompleteProps> = (props) => {
  let { fetchSuggestion, onSelect, ...restProps } = props
  const handleChange = (str) => {

  }
  return (
    <Input onChange={handleChange}></Input>
  )
}

export default AutoComplete