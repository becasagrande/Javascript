const http = require('http');

http.get('http://jsonplaceholder.typicode.com/todos/2' , (res) => {
    let data = '';

    //Um pedaço de dado foi recebido.
    res.on('data' , (chunk) => {
        data += chunk;
    });

    //A resposta inteira foi recebida. Imprime o resultado.
    res.on('end' , () => {
        console.log(JSON.parse(data));
    });

}).on("error" , (err) => {
    console.log("Erro: " + err.message);
});