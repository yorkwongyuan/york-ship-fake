import React from 'react';
import YKButton, { ButtonType, ButtonSize } from './components/Button/yk-button'

function App() {
  return (
    <>
      <YKButton btnType={ButtonType.Primary} size={ButtonSize.Large} onClick={(e) => { e.preventDefault(); alert(123) }}>btn</YKButton>
      <YKButton className="custom" btnType={ButtonType.Danger}>custom</YKButton>

      <yk-button className="custom" btnType={ButtonType.Danger}>custom</yk-button>
    </>
  );
}

export default App;
