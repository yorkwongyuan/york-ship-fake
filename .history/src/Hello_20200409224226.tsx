import React from 'react';

interface Props {
  message: string;
}
const Hello: React.FunctionComponent<Props> = (props) => {
  return (
    <p>
      {props.children}
      {props.message}
    </p>
  )
}
Hello.defaultProps = { message: '大乳房' }
export default Hello;