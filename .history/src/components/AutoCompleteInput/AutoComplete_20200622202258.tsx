import React from 'react'
import Input,{InputProps} from '../Input/input'

interface AutoCompleteProps extends InputProps{
  onSelect?:(str:string)=>void;
}