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

library.add(fas)
let App: FC = () => {
  let [isShow, setIsShow] = useState(false)
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
      <Menu onSelect={(index) => alert(index)} mode="horizon" defaultIndex={'0'} defaultOpenSubMenus={['3']}>
        <MenuItem> 1</MenuItem>
        <MenuItem> 2</MenuItem>
        <MenuItem> 3</MenuItem>
        <SubMenu title="这就是">
          <MenuItem> 4</MenuItem>
          <MenuItem> 5</MenuItem>
        </SubMenu>
      </Menu>

      <Button onClick={setIsShow(!isShow)}>点击</Button>

    </>
  );
}

export default App;
