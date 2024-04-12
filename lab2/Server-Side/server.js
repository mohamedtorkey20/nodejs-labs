const http=require('http');
const fs=require('fs');



//#region read File
var Main="";
fs.readFile("../Client-Side/main.html","utf-8",(err,data)=>
{
    if(err)
    {
        console.log(Error);
    }else{
        Main=data;
    }
})

var Welcome=fs.readFileSync("../Client-Side/welcome.html","utf-8");

//#endregion

http.createServer((req,res)=>{
        //#region  Get
        if(req.method== "GET")
        {
            switch(req.url){
                case"/":
                case"/main.html":
                case"/Client-Side/main.html":
                    res.setHeader("Content-Type","text/html");
                    res.write(Main);
                    break;

                case '/jsonFile':
                    const data=fs.readFileSync('clients.json','utf-8')
                    res.write(data);
                        break;
                default:
                    if(req.url.includes("welcome.html"))
                    {
                        res.setHeader("Content-Type","text/html");
                        res.write(Welcome);
                    }else{
                        res.write("Invalid URl!");
                    }    
            }
            res.end();
        } 
        //#endregion
        //#region POST
        else if (req.method == "POST")
        {
            let Name = "";
            let Email= "";
            let Phone= "";
            let Address= "";
            let Password= "";

        req.on("data", (data)=>{
            let userData = data.toString();
             Name = userData.split("&")[0].split("=")[1];
             Email= userData.split("&")[1].split("=")[1];
            Phone = userData.split("&")[2].split("=")[1];
            Address = userData.split("&")[3].split("=")[1];
            
            
            
            //----------append data to  json file------------------

            const getfile = fs.readFileSync('clients.json', 'utf8');
            let Data = getfile ? JSON.parse(getfile) :[];
            let client={Name,Email,Phone,Address}
            Data.push(client);
            fs.writeFile('clients.json', JSON.stringify(Data), 'utf8', (err) => {
                if (err) {
                    console.log('Error');
                }
                console.log('data save successfuly');
            });
           
            
        })//1)
      
      
        req.on("end", () => {
            res.setHeader("Content-Type", "text/html");
                
            let File = Welcome.replace("{name}",Name).replace("{email}",Email).replace("{phone}",Phone)
            .replace("{address}",Address).replace("%40","@")

            res.write(File);
            res.end();
        })//2)

        req.on("error", ()=>{console.log("Error")})//1,2,3
        req.on("close", ()=>{console.log("Closed")})//3)
        
        
        }
        
        //#endregion
        //#region  default
        else {
            res.end("Please Check Your method [GET -POST]")
        }
}).listen(7002,()=>console.log("http://localhost:7002"));

