import {useState,useEffect} from 'react'

function useDebounce(value:any,delay = 300){
  // 注意这里的value,每次输入改变,是不会触发debounce的修改的,只有setDebounce才能修改
  let [debounce,setDebounce] = useState(value)
  useEffect(()=>{
    let handler = setTimeout(()=>{
      setDebounce(value)
    },delay)
    return ()=> {clearTimeout(handler)}
  },[value,delay])
  return debounce
}

export default useDebounce