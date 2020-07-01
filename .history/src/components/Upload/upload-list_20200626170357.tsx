import React , {FC} from 'react'
import {UploadFile} from './upload'
interface UploadListProps {
  fileLists:UploadFile[];
  onRemove:(file:UploadFile) => void
}

export const UploadList:FC<UploadListProps> = (props) =>{
  const {fileLists,onRemove} = props

  return (
    <>
      <ul>
        {fileLists.map(file=>{
          return (
            <li key={file.uid}>
              <div>
                {file.name}
              </div>
            </li>
          )
        })}
      </ul>
    </>
  )
}

export default UploadList;