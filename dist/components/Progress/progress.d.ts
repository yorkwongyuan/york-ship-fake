import { FC, CSSProperties } from 'react';
import { theme } from '../Icon/icon';
export interface ProgressProps {
    strokeHeight?: number;
    percentage?: number;
    styles?: CSSProperties;
    showText: boolean;
    theme: theme;
}
export declare const Progress: FC<ProgressProps>;
export default Progress;
