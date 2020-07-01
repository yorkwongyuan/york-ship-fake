import React, { ChangeEvent, FC } from 'react'
import Input, { InputProps } from '../Input/input'

interface AutoCompleteProps extends InputProps {
  onChange: (e: ChangeEvent) => void;
  fetchSuggestion: (str: string) => string[]
}

const AutoComplete: FC<AutoCompleteProps> = (props) => {
  let { } = props
}