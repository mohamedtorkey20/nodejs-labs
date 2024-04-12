const express=require("express");
const app=express();
const { Server }=require("socket.io");
const PORT=process.env.PORT||3510;
const path=require('path');



app.get("/",(req,res)=>{
    res.sendFile(path.join(__dirname,"../Client/main.html"));
})

app.get("/script.js",(req,res)=>{
    res.sendFile(path.join(__dirname,"../Client/script.js"));
})

app.get("/style.css",(req,res)=>{
    res.sendFile(path.join(__dirname,"../Client/style.css"));
})

app.all("*",(req,res)=>{
    res.send("Invalid url!")
})

const expressServer =app.listen(PORT,()=>{
    console.log(`http://localhost:${PORT}`);
})


const io = new Server(expressServer)

io.on('connection', socket => {
    console.log(`User ${socket.id} connected`)

    socket.on('message', data => {
        console.log(data)
        io.emit('message', { id: socket.id, message: data });
    });
});
