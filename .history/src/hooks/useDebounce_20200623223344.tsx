import React,{useState,useEffect} from 'react'

function useDebounce(value:any,delay = 300){
  let [debounce,setDebounce] = useState(value)
  useEffect(()=>{
    let handler = setTimeout(()=>{

    },delay)
  })
}