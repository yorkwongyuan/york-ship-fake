import React from 'react';
// import YKButton, { ButtonType, ButtonSize } from './components/Button/yk-button'
// import Alert, { AlertType, AlertSize } from './components/Alert/yk-alert'
// import Menu, { MenuProps } from './components/Menu/yk-menu'
import MenuItem, { MenuItemProps } from './components/Menu/yk-menu-item'
import MyMenu from './components/my-menu'
function App() {
  return (
    <>
      <MyMenu onSelect={(index) => alert(index)}>
        <MenuItem index={0}> 1</MenuItem>
      </MyMenu>

    </>
  );
}

export default App;
