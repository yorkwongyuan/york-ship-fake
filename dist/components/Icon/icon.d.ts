import { FC } from 'react';
import { FontAwesomeIconProps } from '@fortawesome/react-fontawesome';
export declare type theme = 'primary' | 'secondary' | 'danger';
export interface IconProps extends FontAwesomeIconProps {
    theme?: theme;
    className?: string;
}
export declare const Icon: FC<IconProps>;
export default Icon;
