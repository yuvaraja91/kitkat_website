// const express = require('express');
// const mongoose = require('mongoose');
// const cors = require('cors');
// const app = express();
// const User = require('./models/dataSchema')

// app.use(express.json());
// app.use(cors());

// mongoose.connect('mongodb://127.0.0.1:27017/webDB', {useNewUrlParser:true})

//  .then(()=>{

//     console.log("db is connected");
// })


// .catch(()=>{
//     console.log("db is not connected");
// })

// app.post('./insert', async(req,res) => {
//         const fullName = req.body.fullName
//         const fPhone = req.body.fPhone
//         const fEmail = req.body.fEmail

//         const formData = new User({
//             name:fullName,
//             phone:fPhone,
//             email:fEmail
//         })


//         try {
//             await formData.save();
//             res.send("Data Inserted")
//         }
//         catch(err){
//             console.log(err);
//         }

// } );

// app.listen(4000, ()=> {
//     console.log("Server is Running");
// })




const express = require('express');
const cors = require('cors');


    const app =express();
    app.use(express.json())
    app.use(cors());

const dataschema =require('./module/user')


const mongoose =require('mongoose');
   
mongoose.connect("mongodb://127.0.0.1:27017/webDB", {useNewUrlParser:true})


.then(()=>{
console.log("db connected");

})


.catch(()=>{
  console.log("db is not connected");

})


app.get("/home",(req,res)=>{

  res.json("hello")
})


app.post("/create",async(req,res)=>{

    const Name = req.body.name
    const Email = req.body.email
    const Phone = req.body.phone

    console.log(Name,Email,Phone);
    const FormData = new dataschema({
        name: Name,
        email: Email,
        phone: Phone
    })

  
      try{
      const datas =await FormData.save();
      res.json(datas);
      // res.sendFile('http://localhost:3000');
      res.send("Data Inserted");
      // res.status().send(200);
      // res.redirect('http://localhost:3000');
    }
        catch(err){
            console.log(err);
        }



})

app.get("/view", async(req,res) =>{

  const finddata=await dataschema.find();
  res.json(finddata) 
})

    app.listen(4000,()=>{
console.log("server is running port:4000");


})
