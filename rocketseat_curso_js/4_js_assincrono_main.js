//Ajax - forma de requisitar informações do servidor sem precisar atualizar a página
alert('teste');
//https://api.github.com/users/yanfonseca

var xhr = new XMLHttpRequest();

xhr.open('GET', 'https://api.github.com/users/yanfonseca');
xhr.send(null);

xhr.onreadystatechange = function(){
    if (xhr.readyState === 4){
        console.log(JSON.parse(xhr.responseText))
    }
}