import React from 'react';
import YKButton, { ButtonType, ButtonSize } from './components/Button/yk-button'

function App() {
  return (
    <>
      <YKButton href="www.baidu.com" btnType={ButtonType.Primary} size={ButtonSize.Large} onClick={(e) => { e.preventDefault(); alert(123) }}>btn</YKButton>
      {/* <YKButton btnType={ButtonType.Primary} href="http://www.baidu.com" size={ButtonSize.Large} disabled>链接</YKButton> */}
    </>
  );
}

export default App;
