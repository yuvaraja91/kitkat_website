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

          Axios.post('http://localhost:4000/create',{
              fullName: name,
              fEmail: email,
              fPhone: phone
              
        })
          .then((res)=>{
            setName(res.data.name);
            setPhone(res.data.phone);
            setPhone(res.data.email);
            console.log(res.data.name);
          })

        }

        return(
          <div className="">
              <header class="App-header">
                <div class="logIn">
                  <form onSubmit={handleSubmit}>
                    <p class="form">Name:   <input
                      
                      type="text"
                      placeholder="Please Enter Name"
                      onChange={(e) => {setName(e.target.value)}}
                    /></p>
                    
                    <p class="form">Ph No:   <input
                      className=""
                      type="text"
                      placeholder="Please Enter Number"
                      onChange={(e) => {setPhone(e.target.value)}}
                    /></p>
                    
                    <p class="form">Email:   <input
                      className=""
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
  