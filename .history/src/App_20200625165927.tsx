import React, { FC, useState } from 'react';
import { fas } from '@fortawesome/free-solid-svg-icons'
import { library } from '@fortawesome/fontawesome-svg-core'
// import YKButton, { ButtonType, ButtonSize } from './components/Button/yk-button'
// import Alert, { AlertType, AlertSize } from './components/Alert/yk-alert'
// import Menu, { MenuProps } from './components/Menu/yk-menu'
import MenuItem from './components/Menu/my-menu-item'
import Menu from './components/Menu/my-menu'
import SubMenu from './components/Menu/my-submenu'
import Button from './components/Button/yk-button'
import Transition from './components/Transition/transition'
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
