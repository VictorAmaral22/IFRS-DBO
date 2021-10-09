/*
AJAX( Asynchronous JavaScript And XML ) é uma técnica de trocar informação entre o browser e o servidor.
Ele permite fazer o reload da página sem precisar recarregar ela.

AJAX é a combinação do uso de um browser com o objeto XMLHttpRequest incluso, JavaScript e HTML DOM

Funciona da seguinte maneira:

1 -  No browser ocorre um evento, é criado um objeto XMLHttpRequest e este é enviado para o server.
2 - No server, esse HttpRequest é processado e é criada a resposta que é enviada de volta ao browser.
3 - Ele recebe a resposta e a processa usando JavaScript, logo após tem um update do conteúdo da página.

---------------

É assim que se cria um objeto XMLHttpRequest:
*/
var xhttp = new XMLHttpRequest();
/*

        ALGUNS MÉTODOS

abort() -> cancela o request atual;

getAllResponseHeaders() -> retorna informações dos headers;

getResponseHeader() -> retorna a informação de um header específico;

open(method, url, async, user, psw) -> especifica um request...
method - um request do tipo GET ou POST,
url - a localização de um arquivo,
async - true ou false,
user - usuário opcional,
psw - senha opcional
;

send() -> envia um request para o server, utilizado com GET requests;

send(string) -> envia um request para o server, utilizado com POST requests;

setRequestHeader() ->	adiciona uma legenda ou valor par ao header a ser enviado;

*/

/*
        PROPRIEDADES DO OBJETO XMMLHttpRequest

onreadystatechange -> Define uma função a ser chamada quando a propriedade do readyState mudar;

readyState ->	é o status do XMLHttpRequest
0: o request não foi inicializado ainda
1: a conexão com o server foi estabelecida
2: request recebido
3: processando o request
4: request finalizado e a resposta está pronta

responseText ->	retorna os dados da resposta como string 

responseXML ->	retorna os dados da resposta como um dado XML

status -> retorna os status em número do request
200: "OK"
403: "Forbidden"
404: "Not Found"

statusText ->	retorna o status em texto (e.g. "OK" or "Not Found")
*/

/*
GET -> é um método, mais simples que o post e mais rápido e menos seguro.
*/
xhttp.open("GET", "ajax_info.txt", true);
xhttp.send();
/*
POST -> é um método mais robusto e complexo que o get
*/
xhttp.open("POST", "ajax_test.asp", true);
xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
xhttp.send("fname=Henry&lname=Ford");
/*
setRequestHeader(header, value) -> Adiciona um HTTP header ao request

header: especifica o nome do header 
value: especifica o valor do header
*/

/* 

AJAX é de extrema importância para ter um site responsivo, com pouca demora para atualizar os dados e também é um método mais seguro de armazenar informações através do método POST por exemplo. Ambos GET e POST, são métodos que pegar propriedades do server e trazem ela pra página.

Exemplo:

<!DOCTYPE html>
<html>
<body>

<div id="demo">
<h2>The XMLHttpRequest Object</h2>
<button type="button" onclick="loadDoc()">Change Content</button>
</div>

<script>
function loadDoc() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      document.getElementById("demo").innerHTML =
      this.responseText;
    }
  };
  xhttp.open("GET", "ajax_info.txt", true);
  xhttp.send();
}
</script>

</body>
</html>
*/