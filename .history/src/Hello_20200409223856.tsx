import React from 'react';

interface Props {
  message: string;
}
const Hello = (props: Props) => {
  return (
    <p>
      {props.message}
    </p>
  )
}

export default Hello;