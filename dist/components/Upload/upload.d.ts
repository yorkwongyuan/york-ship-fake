import { FC } from 'react';
export declare type FileStatus = 'ready' | 'uploading' | 'success' | 'error';
export interface UploadFile {
    uid: string;
    name: string;
    size: number;
    raw?: File;
    percentage: number;
    status: FileStatus;
    response?: any;
    error?: any;
}
export interface UploadProps {
    action: string;
    onSuccess?: (data: any, file: UploadFile) => void;
    onError?: (err: any, file: UploadFile) => void;
    onProgress?: (percentage: number, file: UploadFile) => void;
    beforeUpload?: (file: UploadFile) => boolean | Promise<File>;
    onChange?: (file: UploadFile) => void;
    onRemove?: (file: UploadFile) => void;
    defaultFileLists?: UploadFile[];
    name?: string;
    headers?: {
        [key: string]: any;
    };
    data?: {
        [key: string]: any;
    };
    withCredentials?: boolean;
    accept?: string;
    multiple?: boolean;
    drag?: boolean;
}
export declare const Upload: FC<UploadProps>;
export default Upload;
