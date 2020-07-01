import React, { FC, useState, ChangeEvent } from 'react'
import Input, { InputProps } from '../Input/input'
interface AutoCompleteProps extends Omit<InputProps, 'onSelect'> {
  /** 获取数据 */
  fetchSuggestions: (str: string) => string[];
  /** 选择 */
  onSelect?: () => void;
}


export const AutoCompleteInput: FC<AutoCompleteProps> = (props) => {
  const { onSelect, value, fetchSuggestions, ...restProps } = props
  const [inputValue, setInputValue] = useState(value)
  const [suggestion, setSuggestion] = useState<string[]>([])
  // onChange事件
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.trim()
    setInputValue(value)
    if (value) {
      let result = fetchSuggestions(value)
      setSuggestion(result)
    } else {
      setSuggestion([])
    }
  }
  return (
    <div>
      {suggestion}
      <Input onChange={handleChange} value={inputValue} {...restProps} />
    </div>
  )
}


export default AutoCompleteInput;