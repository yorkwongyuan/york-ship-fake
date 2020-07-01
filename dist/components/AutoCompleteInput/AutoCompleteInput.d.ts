import { FC, ReactElement } from 'react';
import { InputProps } from '../Input/input';
interface AutoCompleteProps extends Omit<InputProps, 'onSelect'> {
    /** 获取数据 */
    fetchSuggestions: (str: string) => string[];
    /** 选择 */
    onSelect?: (str: string) => void;
    /** 渲染模版 */
    renderOption?: (str: string) => ReactElement;
}
export declare const AutoCompleteInput: FC<AutoCompleteProps>;
export default AutoCompleteInput;
