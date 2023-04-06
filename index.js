var http = require('http')
var fs = require('fs')

http.createServer(function (req,res){
    fs.readFile('index.html',function(err,data) {
        res.writeHead(200,{'Context-Type' : 'text/html'})
        res.write(data)
        return res.end();
    })
    fs.appendFile('newFile.txt',"Hello conteent!",(err) => {
        if(err) throw err
        console.log('Saved')
    })
}).listen(8080);