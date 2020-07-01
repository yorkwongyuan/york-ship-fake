import React from 'react';
export declare enum AlertType {
    Success = "success",
    Default = "default",
    Danger = "danger",
    Warning = "warning"
}
export declare enum AlertSize {
    Large = "large",
    Medium = "medium",
    Small = "small",
    Min = "min"
}
export interface AlertProps {
    alertType?: AlertType;
    title?: string;
    content?: string;
    className?: string;
    alertSize?: AlertSize;
    onClick?: () => void;
}
declare const Alert: React.FC<AlertProps>;
export default Alert;
