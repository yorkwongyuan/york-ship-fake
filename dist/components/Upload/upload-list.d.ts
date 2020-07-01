import { FC } from 'react';
import { UploadFile } from './upload';
interface UploadListProps {
    fileLists: UploadFile[];
    onRemove: (file: UploadFile) => void;
}
export declare const UploadList: FC<UploadListProps>;
export default UploadList;
