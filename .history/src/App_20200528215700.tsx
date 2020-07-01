import React from 'react';
import YKButton, { ButtonType, ButtonSize } from './components/Button/yk-button'

function jk() {
  console.log('this is jk')
}
function App() {
  return (
    <>
      <YKButton href="www.baidu.com" btnType={ButtonType.Primary} size={ButtonSize.Large} onClick={(e) => e.preventDefault(); </YKButton>
      {/* <YKButton btnType={ButtonType.Primary} href="http://www.baidu.com" size={ButtonSize.Large} disabled>链接</YKButton> */ }
    </>
  );
}

export default App;
