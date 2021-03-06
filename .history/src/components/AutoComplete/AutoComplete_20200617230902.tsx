import React, { ChangeEvent, FC } from 'react'
import Input, { InputProps } from '../Input/input'

interface AutoCompleteProps extends Omit<InputProps, 'onSelect'> {
  onSelect: (e: string) => void;
  fetchSuggestion: (str: string) => string[]
}

export const AutoComplete: FC<AutoCompleteProps> = (props) => {
  let { fetchSuggestion, ...restProps } = props
  const handleChange = (str) => {

  }
  return (
    <Input></Input>
  )
}

export default AutoComplete