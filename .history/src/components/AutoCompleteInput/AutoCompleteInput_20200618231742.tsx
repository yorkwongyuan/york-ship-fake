import React, { FC, useState, ChangeEvent, ReactElement } from 'react'
import Input, { InputProps } from '../Input/input'
interface AutoCompleteProps extends Omit<InputProps, 'onSelect'> {
  /** 获取数据 */
  fetchSuggestions: (str: string) => string[];
  /** 选择 */
  onSelect?: (str: string) => void;
  /** 渲染模版 */
  renderOption: (str: string) => ReactElement
}


export const AutoCompleteInput: FC<AutoCompleteProps> = (props) => {
  const { onSelect, value, fetchSuggestions, renderOption, ...restProps } = props
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

  // 选择
  const handleSelect = (str: string) => {
    if (onSelect) {
      onSelect(str)
    }
    setInputValue(str)
    setSuggestion([])
  }


  // 渲染下拉组件部分
  const renderChild = () => {
    return (
      <ul>
        {suggestion.map((item, index) => {
          return (
            <li key={index} onClick={() => handleSelect(item)}>
              {renderOption ? renderOption(item) : item}
            </li>
          )
        })}
      </ul>
    )
  }
  return (
    <div>
      <Input onChange={handleChange} value={inputValue} {...restProps} />
      {suggestion.length > 0 && renderChild()}
    </div>
  )
}


export default AutoCompleteInput;