var http = require('http')
var fs = require('fs');
const { error } = require('console');

http.createServer(function (req,res){
    fs.readFile('index.html',function(err,data) {
        res.writeHead(200,{'Context-Type' : 'text/html'})
        res.write(data)
        return res.end();
    })
    // fs.appendFile('newFile.txt',"Hello conteent!",(err) => {
    //     if(err) throw err
    //     console.log('Saved')
    // })
    // fs.readFile('newFile.txt',(err,data) => {
    //     res.writeHead(200,{'Context-Type':'text/html'});
    //     res.write(data)
    //     if(err) throw err
    //     console.log("Read Success")
    // })
    fs.writeFile('myFile.txt',"This is Test Write",(error) => {
        if(error) throw error
        console.log("write Success")
    })
}).listen(8080);