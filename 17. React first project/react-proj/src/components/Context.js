import React,{useState,useContext} from 'react';
const ThemeContext = React.createContext('light');

function ThemeProvider({children}){
	const[theme,setTheme]=useState('light');
	return(
		<ThemeContext.Provider value={{theme,setTheme}}>
			{children}
		</ThemeContext.Provider>
	)
}

function ThemeToggler(){
	const{theme,setTheme}=useContext(ThemeContext);
	const toggleTheme = () => {
		setTheme(theme === 'light'? 'dark':'light');
	}
	return(
		<button onClick={toggleTheme}>Toggle Theme({theme})</button>
	)
}
const Context = () => {
  return (
	<ThemeProvider>
       <div>
		<h1>React hook</h1>
		<ThemeToggler/>
	   </div>
	</ThemeProvider>
	
  )
}

export default Context