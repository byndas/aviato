import React, {useState, createContext } from 'react';

export const LanguageContext = createContext();

export function LanguageProvider (props){
    const [language, setLanguage ] = useState('Geo')
    const handleChange = (e) => {
      setLanguage(e.target.value)
    }
     return(
      <LanguageContext.Provider value={{language, handleChange}}>
         {props.children}
     </LanguageContext.Provider>
   )
}
