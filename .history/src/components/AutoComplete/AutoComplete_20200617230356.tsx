import React, { ChangeEvent, FC } from 'react'
import Input, { InputProps } from '../Input/input'

interface AutoCompleteProps extends InputProps {
  onChange: (e: ChangeEvent) => void
}

const AutoComplete: FC<>