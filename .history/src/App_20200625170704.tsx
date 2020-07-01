import React, { FC, useState } from 'react';
import { fas } from '@fortawesome/free-solid-svg-icons'
import { library } from '@fortawesome/fontawesome-svg-core'
import axios from 'axios'
library.add(fas)
let App: FC = () => {
  let [title, setTitle] = useState('')
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
