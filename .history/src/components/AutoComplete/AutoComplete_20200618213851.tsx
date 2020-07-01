import React, { FC, useState } from 'react'
import Input, { InputProps } from '../Input/input'
interface AutoCompleteProps extends Omit<InputProps, 'onSelect'> {
  fetchSuggestion: (str: string) => string[];
  onSelect: () => void;
}


const AutoCompleteInput: FC<AutoCompleteProps> = (props) => {
  const { onSelect, value } = props


  return (
    <div>
      <Input />
    </div>
  )
}