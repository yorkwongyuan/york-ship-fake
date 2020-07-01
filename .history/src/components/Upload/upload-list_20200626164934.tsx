import React , {FC} from 'react'
import {UploadFile} from './upload'
interface UploadListProps {
  defaultFileLists:UploadFile[];
  onRemove:(file:UploadFile) => void
}

export const UploadList:FC<UploadListProps> = (props) =>{
  const {defaultFileLists,onRemove} = props

  return (
    <>
      <ul>
        {defaultFileLists.map(file=>{
          return (
            <li>
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