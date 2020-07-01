import { FC } from 'react';
export interface DragProps {
    onFile: (file: FileList) => void;
}
export declare const Dragger: FC<DragProps>;
export default Dragger;
