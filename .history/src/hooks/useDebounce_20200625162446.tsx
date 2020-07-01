import {useState,useEffect} from 'react'

function useDebounce(value:any,delay = 300){
  console.log('所谓的value',value)
  let [debounce,setDebounce] = useState(value)
  console.log('触发上方,也就是setTimeout之后',debounce)
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