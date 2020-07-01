import React from 'react';
import YKButton, { ButtonType, ButtonSize } from './components/Button/yk-button'

function App() {
  return (
    <>
      <YKButton href="www.baidu.com" btnType={ButtonType.Primary} size={ButtonSize.Large} onClick={(e) => { e.preventDefault(); alert(123) }}>btn</YKButton>
      <YKButton className="custom"></YKButton>
    </>
  );
}

export default App;
