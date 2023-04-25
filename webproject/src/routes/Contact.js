import React, { useState } from "react";
import './style.css';
import Axios from 'axios';

const Contact = () => {
    return (
      <>
          <h2>Contact</h2>  
      
      <ContDetail/>    
      </>
    );
    
  };

  function ContDetail(){
        const [name, setName] = useState("")
        const [phone, setPhone] =  useState("")
        const [email, setEmail] = useState("")

        const handleSubmit = (e) => {
          e.preventDefault();
          
          console.log(name);
          console.log(email);
          console.log(phone);

          
          Axios.post('http://localhost:4000/create',{
          
              // Name: name,
              // Phone: phone,
              // Email: email
              name,
              email,
              phone
              
                    
        })
        

          .then((res)=>{
            setName(res.data.name);
            setPhone(res.data.phone);
            setEmail(res.data.email);
            console.log(res.data.name);
          })

          // const onClear = () =>{
            setName("");
            setEmail("");
            setPhone("");
  
          // };

        }
        
        

        return(
          <div class="">
              <header class="App-header">
                <div class="logIn">
                  <form onSubmit={handleSubmit}>
                    <p class="form">Name:   <input
                      
                      type="text"
                      placeholder="Please Enter Name"
                      onChange={(e) => {setName(e.target.value)}}/></p>
                    
                    <p class="form">Ph No:   <input
                      class=""
                      type="text"
                      placeholder="Please Enter Number"
                      onChange={(e) => {setPhone(e.target.value)}}
                    /></p>
                    
                    <p class="form">Email:   <input
                      class=""
                      type="text"
                      placeholder="Please Enter Email"
                      onChange={(e) => {setEmail(e.target.value)}}
                    /></p>
                    
                    <p><button type="submit" >Submit</button></p>


                  </form>
                </div>
              </header>
          </div>
        );

  }
  
  export default Contact;
  