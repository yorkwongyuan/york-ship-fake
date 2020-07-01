import { FC } from 'react';
import { MenuProps } from './my-menu';
import { MenuItemProps } from './my-menu-item';
import { SubMenuProps } from './my-submenu';
export declare type IComponents = FC<MenuProps> & {
    Item: FC<MenuItemProps>;
    SubMenu: FC<SubMenuProps>;
};
declare const TransformMenu: IComponents;
export default TransformMenu;
