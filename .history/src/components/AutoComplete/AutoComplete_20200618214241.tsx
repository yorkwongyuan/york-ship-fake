import React, { FC, useState, ChangeEvent } from 'react'
import Input, { InputProps } from '../Input/input'
interface AutoCompleteProps extends Omit<InputProps, 'onSelect'> {
  fetchSuggestion: (str: string) => string[];
  onSelect: () => void;
}


const AutoCompleteInput: FC<AutoCompleteProps> = (props) => {
  const { onSelect, value } = props
  const [inputValue, setValue] = useState(value)

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.trim()
  }
  return (
    <div>
      <Input onChange={handleChange} />
    </div>
  )
}