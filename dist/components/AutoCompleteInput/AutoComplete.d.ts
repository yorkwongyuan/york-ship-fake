import { FC, ReactElement } from 'react';
import { InputProps } from '../Input/input';
interface DataSource {
    value: string;
}
export declare type DataSourceType<T = {}> = DataSource & T;
export interface AutoCompleteProps extends Omit<InputProps, 'onSelect'> {
    fetchSuggestion: (str: string) => DataSourceType[] | Promise<DataSourceType[]>;
    onSelect: (str: DataSourceType) => void;
    renderOption?: (str: DataSource) => ReactElement;
}
export declare const AutoComplete: FC<AutoCompleteProps>;
export default AutoComplete;
