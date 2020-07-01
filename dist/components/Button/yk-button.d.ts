import { ButtonHTMLAttributes, AnchorHTMLAttributes, FC, ReactNode } from 'react';
export declare type ButtonSize = 'sm' | 'lg';
export declare type ButtonType = 'primary' | 'default' | 'danger' | 'link' | 'disabled';
interface BaseButtonProps {
    className?: string;
    /** 设置Button是否禁用 */
    disabled?: boolean;
    /** 设置Button类型 */
    btnType?: ButtonType;
    /** 设置Button尺寸 */
    size?: ButtonSize;
    children?: ReactNode;
    /** Button type为link的时候,a标签的href属性 */
    href?: string;
}
declare type NativeButtonProps = BaseButtonProps & ButtonHTMLAttributes<HTMLElement>;
declare type NativeAnchorProps = BaseButtonProps & AnchorHTMLAttributes<HTMLElement>;
export declare type ButtonProps = Partial<NativeButtonProps & NativeAnchorProps>;
/**
 *
 * 使用方法
 * ~~~ js
 * import {Button} from 'yk-button'
 * ~~~
 */
export declare const Button: FC<ButtonProps>;
export default Button;
