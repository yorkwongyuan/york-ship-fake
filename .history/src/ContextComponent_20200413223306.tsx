import React, { createContext } from 'react'
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
export let ThemeContext = createContext(themeInstance.light)
const ContextComponent: React.FC = () => {

  return (
    <div>
      <ThemeContext.Provider value={themeInstance.light}>
        123
      </ThemeContext.Provider>
    </div>
  )
}

export default ContextComponent;