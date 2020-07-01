import {useEffect,RefObject} from 'react'

function useClickoutside(ref:RefObject<HTMLElement>,handler:Function){
  let listener = (e:MouseEvent)=>{
    if(!ref.current || ref.current.contains(e.target as HTMLElement)){
      return 
    }
  }
}