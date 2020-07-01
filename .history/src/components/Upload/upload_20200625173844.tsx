import React,{FC} from 'react'


interface UploadProps{
  action:string;
  onSuccess:(file:File)=>void;
}
