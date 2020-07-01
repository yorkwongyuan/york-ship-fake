import React , {FC} from 'react'
import {UploadFile} from './upload'
interface UploadListProps {
  defaultFileLists:UploadFile[];
  onRemove:(file:UploadFile) => void
}

const UploadList:FC<UploadListProps> = (props) =>{
  const {defaultFileLists,onRemove} = props
}