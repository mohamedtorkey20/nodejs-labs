

const fs=require('fs');
const express = require("express");
const app = express();
const PORT = process.env.PORT||7004;
const path = require("path");
const bodyParser = require("body-parser")








var Welcome=fs.readFileSync("../Client-Side/welcome.html","utf-8");
//#region Server

//MiddleWare
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
//

app.get("/",(req, res)=>{
    res.sendFile(path.join(__dirname, "../Client-Side/main.html"));

})

app.get("/main.html", (req, res)=>{
    res.sendFile(path.join(__dirname, "../Client-Side/main.html"));
})
app.get("/welcome.html", (req, res)=>{
    res.sendFile(path.join(__dirname, "../Client-Side/welcome.html"));
})

app.get("/jsonFile",(req,res)=>{

    res.sendFile(path.join(__dirname, "../Server-Side/clients.json"));
})



app.post("/welcome.html",(req, res)=>{ 
 
    const name=req.body.name;
    const email=req.body.email;
    const phone=req.body.phone;
    const address=req.body.address;

    let File = Welcome.replace("{name}",name).replace("{email}",email).replace("{phone}",phone)
            .replace("{address}",address).replace("%40","@")

    res.send(File);


                //----------append data to  json file------------------

            const getfile = fs.readFileSync('clients.json', 'utf8');
            let Data = getfile ? JSON.parse(getfile) :[];
            let client={name,email,phone,address}
            Data.push(client);
            fs.writeFile('clients.json', JSON.stringify(Data), 'utf8', (err) => {
                if (err) {
                    console.log('Error');
                }
                console.log('data save successfuly');
            });
})

//Default
app.all("*",(req,res)=>{
    res.send("Please Check ur URL!!")
})

//#endregion

app.listen(PORT, ()=>{console.log("http://localhost:"+PORT)});



