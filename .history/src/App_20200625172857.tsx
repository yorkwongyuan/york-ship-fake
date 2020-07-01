import React, { FC, useState,useEffect,ChangeEvent } from 'react';
import { fas } from '@fortawesome/free-solid-svg-icons'
import { library } from '@fortawesome/fontawesome-svg-core'
import axios from 'axios'
library.add(fas)
let App: FC = () => {
  let [title, setTitle] = useState('')
  // useEffect(()=>{
  //   axios.post('https://jsonplaceholder.typicode.com/posts',{name:'大厦'},
  //   {
  //     headers:{
  //       'X-Requested-With':"XMLHttpRequest"
  //     },
  //     responseType:'json'
  //   }).then(res=>{
  //     setTitle(res.data.name)
  //     console.log(res)
  //   })
  // })
  type cEvent = ChangeEvent<HTMLInputElement>
  const handleChange = (e:cEvent) =>{
    let files = e.target.files
    if(files){
      let file = files[0]
      let formData = new FormData()
      formData.append(file.name,file)
      axios.post('https://jsonplaceholder.typicode.com/posts',formData,{
        headers:{
          'Content-Type':"multipart/form-data"
        }
      }).then(res=>{
        console.log(res,'res')
      })
    }
  }
  return (
    <>
      <div className="app">
        <header>
          <h1>{title}</h1>
        </header>
        <div>
          <input type="file" onChange={(e:cEvent)=>handleChange(e)}/>
        </div>
      </div>
    </>
  )
}

export default App;
