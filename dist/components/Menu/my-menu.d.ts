import React, { FC } from 'react';
declare type mode = 'horizon' | 'vertical';
declare type SelectCallback = (index: string) => void;
export interface MenuProps {
    /** 模式 */
    mode?: mode;
    /** 设置Button是否禁用 */
    disabled?: boolean;
    /** haha */
    defaultIndex?: string;
    className?: string;
    /** Button type为link的时候,a标签的href属性 */
    onSelect?: SelectCallback;
    defaultOpenSubMenus?: string[];
}
interface IMenuContext {
    index: string;
    onSelect?: SelectCallback;
    mode?: mode;
    defaultOpenSubMenus?: string[];
}
export declare let MenuContext: React.Context<IMenuContext>;
/**
 * # Menu组件的使用方法
 * ~~~ js
 * import {Menu} from 'Menu'
 * ~~~
 */
export declare const Menu: FC<MenuProps>;
export default Menu;
