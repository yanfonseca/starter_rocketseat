//Ajax - forma de requisitar informações do servidor sem precisar atualizar a página
//Não precisa se preocupar quando será recebida a resposta

//alert('teste');
//https://api.github.com/users/yanfonseca

//var xhr = new XMLHttpRequest();
//xhr.open('GET', 'https://api.github.com/users/yanfonseca');
//xhr.send(null);

//xhr.onreadystatechange = function(){
//    if (xhr.readyState === 4){
//        console.log(JSON.parse(xhr.responseText))
//    }
//}

var minhaPromise = function(){
    return new Promise(function(resolve, reject){

        var xhr = new XMLHttpRequest();
        xhr.open('GET', 'https://api.github.com/users/yanfonseca');
        xhr.send(null);

        xhr.onreadystatechange = function(){
            if (xhr.readyState === 4){
                if(xhr.status === 200){
                    resolve(JSON.parse(xhr.responseText));
                }else{
                    reject('Erro na requisição')
                }

            }
        }
    });
}

//var resultado = minhaPromise();
//console.log(resultado);

//minhaPromise().then(function(response){console.log(response);}).catch(function(error){console.warn(error);});

//condigo assincrono
//dentro de then, para aguardar resposta do servidor
minhaPromise()
    .then(function(response){
        console.log(response);
    })
    .catch(function(error){
        console.warn(error);
    });