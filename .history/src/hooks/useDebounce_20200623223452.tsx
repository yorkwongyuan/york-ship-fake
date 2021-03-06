import React,{useState,useEffect} from 'react'

function useDebounce(value:any,delay = 300){
  let [debounce,setDebounce] = useState(value)
  useEffect(()=>{
    let handler = setTimeout(()=>{
      setDebounce(value)
    },delay)

    return clearTimeout(handler)
  },[value,delay])
  return debounce
}

export default useDebounce