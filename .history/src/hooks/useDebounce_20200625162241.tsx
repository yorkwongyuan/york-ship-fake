import {useState,useEffect} from 'react'

function useDebounce(value:any,delay = 300){
  let [debounce,setDebounce] = useState(value)
  useEffect(()=>{
    let handler = setTimeout(()=>{
      setDebounce(value)
    },delay)
    return ()=> {clearTimeout(handler)}
  },[value,delay])
  console.log('触发下方,也就是setTimeout之后',debounce)
  return debounce
}

export default useDebounce