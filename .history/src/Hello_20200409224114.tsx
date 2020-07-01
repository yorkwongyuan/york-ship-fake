import React from 'react';

interface Props {
  message: string;
}
const Hello: React.FunctionComponent<Props> = (props) => {
  return (
    <p>
      {props.message}
    </p>
  )
}

export default Hello;