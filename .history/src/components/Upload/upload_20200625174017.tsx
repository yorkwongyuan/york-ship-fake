import React,{FC} from 'react'


export interface UploadProps{
  action:string;
  onSuccess?:(data:any,file:File)=>void;
  onError?:(err:any,file:File)=>void;
  onProgress?:(percentage:number,file:File)=>void;
}
