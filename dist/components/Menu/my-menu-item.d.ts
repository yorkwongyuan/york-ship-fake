import React from 'react';
export interface MenuItemProps {
    index?: string;
    disabled?: boolean;
    style?: React.CSSProperties;
    className?: string;
}
declare const MenuItem: React.FC<MenuItemProps>;
export default MenuItem;
