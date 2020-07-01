import React from 'react';
// import YKButton, { ButtonType, ButtonSize } from './components/Button/yk-button'
// import Alert, { AlertType, AlertSize } from './components/Alert/yk-alert'
// import Menu, { MenuProps } from './components/Menu/yk-menu'
import MenuItem from './components/Menu/my-menu-item'
import Menu from './components/Menu/my-menu'
function App() {
  return (
    <>
      {/* <YKButton btnType={ButtonType.Link} size={ButtonSize.Large} onClick={(e) => { e.preventDefault(); alert(123) }}>btn</YKButton>
      <YKButton className="custom" btnType={ButtonType.Danger}>custom</YKButton>
      <YKButton className="custom2" btnType={ButtonType.Link} href="http://www.baidu.com">customLink</YKButton>
      <Alert alertSize={AlertSize.Large} alertType={AlertType.Success} title="测试alert" content="你确定吗?" />
      <Menu onSelect={(index) => alert(index)}>
        <MenuItem index={0} disable>1</MenuItem>
        <MenuItem index={1}>2</MenuItem>
        <MenuItem index={2}>3</MenuItem>
      </Menu> */}
      <Menu onSelect={(index) => alert(index)}>
        <MenuItem> 1</MenuItem>
        <MenuItem> 2</MenuItem>
        <MenuItem> 3</MenuItem>
        <div>123</div>
      </Menu>

    </>
  );
}

export default App;
