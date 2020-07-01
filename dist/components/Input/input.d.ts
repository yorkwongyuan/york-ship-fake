import { FC, ReactElement, InputHTMLAttributes, ChangeEvent } from 'react';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
declare type InputSize = 'lg' | 'sm';
export interface InputProps extends Omit<InputHTMLAttributes<HTMLElement>, 'size'> {
    /** Button type为link的时候,a标签的href属性 */
    disabled?: boolean;
    /** 输入框尺寸 */
    size?: InputSize;
    /** Button type为link的时候,a标签的href属性 */
    className?: string;
    /** Button type为link的时候,a标签的href属性 */
    append?: string | ReactElement;
    /** 后面插入的*/
    prepand?: string | ReactElement;
    /** 图标 */
    icon?: IconProp;
    onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
}
/**
 * ~~~ js
 * import Input from 'input'
 * ~~~
 */
export declare const Input: FC<InputProps>;
export default Input;
