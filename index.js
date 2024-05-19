const express = require("express");
const path = require("path");
const env=require('dotenv').config()

const app = express();

const port = process.env.PORT || 4012

app.use(express.static(path.join(__dirname, 'public')));  // for static file load like html ,css 


app.get("/", (req, res) => {
     res.send("hy setup is done");
})

app.get("/api",(req,res)=>{
     res.send("<h1>hy this is sam in html</h1>");
     
})

app.get('/dashbord', (req, res) => {
     res.sendFile(path.join(__dirname, 'public', './index.html'));   // for send the any file
   });


app.listen(port, () => {
     console.log(`listening in local-host in port ${port}`);
})