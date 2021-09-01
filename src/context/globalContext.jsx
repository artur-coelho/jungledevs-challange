import React from "react";
import { postEmail } from "../components/form/service";

export const GlobalContext = React.createContext();
export const Storage = ({children}) => {
  const [success, setSuccess] = React.useState(null);
  const [error, setError] = React.useState(null);
  const [loading, setLoading] = React.useState(false);
   async function sendEmail(body) {
    setLoading(true);
    try {
      const response = await postEmail(body);
      console.log('Carregando')
      window.setTimeout(() => {
      if(response.detail) {
        setSuccess("Success!");
        setError(null);
      } else if(response.email && response.name){
        setError("These fields may not be blank.");
        setSuccess(null);
      } else if(response.email) {
        setError(response.email);
        setSuccess(null);
      } else {
        setError(response.name);
        setSuccess(null);
      }
    },2000)
    console.log('resposta')
    } catch(err) {
      console.log(err);
      return "Something went wrong";
    } finally {
      setLoading(false);
      console.log('Terminou')
    }
  }

  return (<GlobalContext.Provider value={{success, error, loading, sendEmail}}>
    {children}
  </GlobalContext.Provider>)
}