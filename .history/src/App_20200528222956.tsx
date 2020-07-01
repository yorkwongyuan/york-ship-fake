import React from 'react';
import YKButton, { ButtonType, ButtonSize } from './components/Button/yk-button'
import Alert, { AlertType, AlertSize } from './components/Alert/yk-alert'
function App() {
  return (
    <>
      <YKButton btnType={ButtonType.Primary} size={ButtonSize.Large} onClick={(e) => { e.preventDefault(); alert(123) }}>btn</YKButton>
      <YKButton className="custom" btnType={ButtonType.Danger}>custom</YKButton>

      <YKButton className="custom2" btnType={ButtonType.Link} href="http://www.baidu.com">customLink</YKButton>
      <Alert alertSize={AlertSize.Large} />
    </>
  );
}

export default App;
