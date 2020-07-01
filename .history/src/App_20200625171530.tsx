import React, { FC, useState,useEffect } from 'react';
import { fas } from '@fortawesome/free-solid-svg-icons'
import { library } from '@fortawesome/fontawesome-svg-core'
import axios from 'axios'
library.add(fas)
let App: FC = () => {
  let [title, setTitle] = useState('')
  useEffect(()=>{
    axios.get('https://jsonplaceholder.typicode.com/posts/1',{name:'大厦'},
    {
      headers:{
        'X-Requested-With':"XMLHttpRequest"
      },
      responseType:'json'
    }).then(res=>{
      console.log(res)
    })
  })
  return (
    <>
      <div className="app">
        <header>
          <h1>{title}</h1>
        </header>
      </div>
    </>
  )
}

export default App;
