import React from 'react'
import { GlobalContext } from '../../context/globalContext';
import Button from '../button'
import styles from './style.module.css'

const Form = () => {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const {success, error, loading, sendEmail} = React.useContext(GlobalContext);
  const body = {
    name: name,
    email: email
  }

  async function handleClick(event) {
    event.preventDefault();
    await sendEmail(body);
  }
  function handleName(event) {
    setName(event.target.value);
  }
  function handleEmail(event) {
    setEmail(event.target.value);
  }
  return (
    <>
     <form className={styles.formStyle}>
        <input type="name" name="name" placeholder="Your name" onChange={handleName} className={styles.formInput} />
        <input type="email" name="email" placeholder="Your email" onChange={handleEmail} className={styles.formInput}/>
        <Button type="SEND" isLoading = {loading} label="Send" onClick={handleClick}/>
      </form>
      {success&&<span className={styles.successMsg}>{success}</span>}
      {error&&<span className={styles.errorMsg}>{error}</span>}
    </>
  )
}

export default Form

//email: ["Enter a valid email address."]
//name: ["This field may not be blank."]
//email: ["This field may not be blank."]