import React from 'react'
import Input, { InputProps } from '../Input/input'
interface AutoCompletePops extends Omit<InputProps, 'onSelect'> {
  fetchSuggestion: (str: string) => string[];
  onSelect: () => void;
}