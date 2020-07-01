import {useEffect,RefObject} from 'react'

function useClickoutside(ref:RefObject<HTMLElement>,handler:Function){
  useEffect(()=>{
    let listener = (e:MouseEvent)=>{
      if(!ref.current || ref.current.contains(e.target as HTMLElement)){
        return 
      }
  
      document.addEventListener('click',listener)
      return ()=>{
        document.removeEventListener('click',listener)
      }
    }
  },[ref,handler])
}