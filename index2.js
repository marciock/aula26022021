const http=require('http');

const server=http.createServer((req,res)=>{
    res.writeHead(200,{'Content-type':'text/html;charset=utf-8'});

    if(req.url==='/'){
        res.write('<h2>Oi</h2>');
    }else if(req.url==='/sobre'){
        res.write('<h2>Sobre nos</2>');

    }else{
        res.writeHead(400,{'Content-type':'text/html;charset=utf-8'});
        res.write('<h1>Página não encontrada</h1>');
    }

    res.end();
    
});

server.listen(3000,()=>{
    console.log('Servidor ligado')
});