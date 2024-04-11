const dalva = require("http");
const port = 80;
const servername = "localhost";

vampeta = dalva.createServer((req,res) => {
    res.statusCode = 200
    res.setHeader("Content-Type","text/html")
    res.end("<h2>ALO MUNDO - <u>SERVIDOR NODEJS NA VEIA</h2>")
}) 

vampeta.listen(port,servername,()=>{
    console.log("SERVIDOR RODANDO")
})