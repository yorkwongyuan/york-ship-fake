import React from 'react';
import YKButton, { ButtonType, ButtonSize } from './components/Button/yk-button'
import Alert, { AlertType, AlertSize } from './components/Alert/yk-alert'
import Menu, { MenuProps } from './components/Menu/yk-menu'
import MenuItem, { MenuItemProps } from './components/Menu/yk-menu-item'
function App() {
  return (
    <>
      <YKButton btnType={ButtonType.Primary} size={ButtonSize.Large} onClick={(e) => { e.preventDefault(); alert(123) }}>btn</YKButton>
      <YKButton className="custom" btnType={ButtonType.Danger}>custom</YKButton>
      <YKButton className="custom2" btnType={ButtonType.Link} href="http://www.baidu.com">customLink</YKButton>
      <Alert alertSize={AlertSize.Large} alertType={AlertType.Success} title="测试alert" content="你确定吗?" />
      <Menu>
        <MenuItem>123123</MenuItem>
        <MenuItem>123123</MenuItem>
        <MenuItem>123123</MenuItem>
      </Menu>
    </>
  );
}

export default App;
