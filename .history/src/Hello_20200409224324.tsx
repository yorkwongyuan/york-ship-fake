import React from 'react';

interface Props {
  message?: string;
}
const Hello: React.FunctionComponent<Props> = (props) => {
  return (
    <p>
      {props.children}
      {props.message}
    </p>
  )
}
Hello.defaultProps = { message: '默认的' }
export default Hello;