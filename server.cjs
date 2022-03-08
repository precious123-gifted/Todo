const http = require ('http')
const path = require ('path');
const fs = require('fs');
const connectDB = require('./connection/connection')

const { extname } = require('path');

const PORT = process.env.PORT || 2000

const server = http.createServer((req,res)=>{
    let filePath = path.join( __dirname,req.url === "/" ? "index.html" : req.url
    );

    let extName = path.extname(filePath)
    let contentType = 'text/html'

    switch(extName){
        case '.js' : contentType = 'text/javascript'
        break;
        case '.html' : contentType = 'text/html'
        break;
        case '.css' : contentType = 'text/css'
        break;
        case '.json' : contentType = 'text/json'
        break;
        case '.jpg' : contentType = 'text/jpg'
        break;
        case '.png' : contentType = 'text/png'
        break;
    }

    fs.readFile(filePath, (error,content) =>{
        if (error){
            if(error.code === 'ENOENT'){
               console.log(error.name)
            }
        }
                  
   res.writeHead(200,{'Content-Type' : contentType})   
      
   res.end(content)
                   
   })




})

const start = async()=>{
    try{
   await connectDB()
   server.listen(PORT,console.log('server 2000 started'))  
    } catch(error){console.log(error)}
    
}
start()

