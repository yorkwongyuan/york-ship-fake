import React , {FC} from 'react'
import {UploadFile} from './upload'
import Progress from '../Progress/progress'
import Icon from '../Icon/icon'
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
            <li key={file.uid} className="upload-list">
              <span className={`upload-filename upload-filename-${file.status}`}>
                <Icon icon="file-alt" theme="secondary"/>
                {file.name}
              </span>
              <span className="upload-list__file-icon">
                {
                  file.status === "uploading" && <Icon icon="spinner" spin/>
                }
                {
                  file.status === "success" && <Icon icon="check-circle" theme="primary"/>
                }
                {
                  file.status === "error" && <Icon icon="times-circle" theme="danger"/>
                }
              </span>
              <span className="upload-list__del-btn" onClick={()=>onRemove(file)}>
                <Icon icon="times"></Icon>
              </span>
              <span>
                {file.status === "uploading" && <Progress theme="primary" percentage={file.percentage} showText={true}/>}
              </span>
            </li>
          )
        })}
      </ul>
    </>
  )
}

export default UploadList;