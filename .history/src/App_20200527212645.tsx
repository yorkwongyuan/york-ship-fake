import React from 'react';
import "./styles/index.scss";
import YKButton, { ButtonType, ButtonSize } from './components/Button/yk-button'


function App() {
  const a = 123;
  if (a === 123) {

  }
  return (
    <>
      <YKButton href="www.baidu.com" btnType={ButtonType.Primary} disabled size={ButtonSize.Small}>按钮</YKButton>
      <YKButton btnType={ButtonType.Primary} href="http://www.baidu.com" size={ButtonSize.Large} disabled>链接</YKButton>
    </>
  );
}

export default App;
