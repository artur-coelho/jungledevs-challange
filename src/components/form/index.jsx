import React from 'react'
import Button from '../button'
import { postEmail } from './service';
import styles from './style.module.css'


const Form = () => {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const body = {
    name: name,
    email: email
  }
  const [mensage, setMensage] = React.useState(null);
  const [error, setError] = React.useState(null);

  async function handleClick(event) {
    event.preventDefault();
    const response = await postEmail(body);
    if(response) {
      if(response.detail) {
        setMensage("Success!");
        setError(null);
      } else if(response.email && response.name){
        setError("These fields may not be blank.");
        setMensage(null);
      } else if(response.email) {
        setError(response.email);
        setMensage(null);
      } else {
        setError(response.name);
        setMensage(null);
      }
    }
    // setMensage(await postEmail(body));
    // setError(await postEmail(body));
    console.log(mensage);
  }
  function handleName(event) {
    setName(event.target.value);
  }
  function handleEmail(event) {
    setEmail(event.target.value);
  }
  return (
    <>
     <form>
        <input type="name" name="name" placeholder="Your name" onChange={handleName} className={styles.formInput} />
        <input type="email" name="email" placeholder="Your email" onChange={handleEmail} className={styles.formInput}/>
        <Button label="Send" onClick={handleClick}/>
      </form>
      {mensage&&<span>{mensage}</span>}
      {error&&<span>{error}</span>}
    </>
  )
}

export default Form

//email: ["Enter a valid email address."]
//name: ["This field may not be blank."]
//email: ["This field may not be blank."]