import React,{ useState } from 'react'
import Styles from '../styles/contact.module.css'
const Contact = () => {

const [name, setname] = useState('')
const [email, setemail] = useState('')
const [phone, setphone] = useState('')
const [desc, setdesc] = useState('')

 const handleSubmit = (e)=>{
   e.preventDefault()
  //  console.log(name , email, phone, desc)

  let data = {name, email, phone, desc}

  if(!data){
    alert()
  }
  try {
    fetch(
      "http://localhost:3000/api/postContact",
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        }
    )
    .then(data=>{
      alert("Thanks for submitting data")
      setname('')
      setdesc('')
      setemail('')
      setphone('')
    });
} catch (err) {
    console.log(err);
}
 }
 const handleChange = (e) =>{
   if(e.target.name=='name'){
    console.log(name)
    setname(e.target.value)
   }
   else if(e.target.name=='email'){
    console.log(email)
    setemail(e.target.value)
   }else if(e.target.name=='phone'){
    console.log(phone)
    setphone(e.target.value)
   }else if(e.target.name=='desc'){
    console.log(desc)
    setdesc(e.target.value)
   }
 }
  return (
    <div className={Styles.container}>
      <h1 className={Styles.h1}>Contact Us</h1>
      <form onSubmit={handleSubmit}>
        <div className={Styles.mb3}>
          <label htmlFor="name" className={Styles.formlabel}>Enter your name</label>
          <input onChange={handleChange} type="text" name="name" id="name" className={Styles.formControl} value={name} required/>
        </div>
        <div className={Styles.mb3}>
          <label htmlFor="email" className={Styles.formlabel}>Enter Email address</label>
          <input required value={email} onChange={handleChange} type="email" name="email" id="email" className={Styles.formControl} aria-describedby='emailHelp' />
          <div id="emailHelp" className={Styles.formtext}>We'll never share your email with anyone else</div>
        </div>
        <div className={Styles.mb3}>
          <label htmlFor="phone" className={Styles.formlabel}>Enter your contact no</label>
          <input required value={phone} onChange={handleChange} type="phone" name="phone" id="phone" className={Styles.formControl} />
        </div>
        <div className={Styles.mb3}>
          <label htmlFor="desc" className={Styles.formlabel}>Elaborate your concern</label>
          <textarea value={desc} onChange={handleChange} className={Styles.formControl} name="desc" id="desc" cols="60" rows="2" placeholder='write your concern here'></textarea>
        </div>
        <button type="submit" className={Styles.btn}>Submit</button>
      </form>
    </div>
  )
}

export default Contact
