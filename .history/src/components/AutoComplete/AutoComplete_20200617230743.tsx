import React, { ChangeEvent, FC } from 'react'
import Input, { InputProps } from '../Input/input'

interface AutoCompleteProps extends Omit<InputProps, 'onSelect'> {
  onSelect: (e: ChangeEvent) => void;
  fetchSuggestion: (str: string) => string[]
}

export const AutoComplete: FC<AutoCompleteProps> = (props) => {
  let { fetchSuggestion, ...restProps } = props

  return (
    <Input></Input>
  )
}

export default AutoComplete