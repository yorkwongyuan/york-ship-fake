import React, { createContext } from 'react'

const ContextComponent: React.FC = () => {
  interface theme {
    [key: string]: {
      color: string;
      background: string;
    }
  }
  let themeInstance: theme = {
    light: {
      color: 'green',
      background: 'blue'
    },
    dark: {
      color: 'black',
      background: 'red'
    }
  }

  export let contexts = createContext(themeInstance.light)
  return (
    <div>
      123
    </div>
  )
}

export default ContextComponent;