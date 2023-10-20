// pensar na nossa lógica, quais funções precisamos fazer e quais variáveis serão alteradas
let n1 = ""
let n2 = ""
let operador = ""
let resp = ""

// começar lendo os numeros
function leNumero(num){
  if(resp !== "" && operador === ""){
    apaga()
  }
  // primeiro caso: pessoa clicando o num pela primeira vez
  if(operador === ""){
    document.getElementById("display").innerHTML += num
    n1+= num //n1 = n1 + num
  } else if(operador !== "" && n2 === ""){  // segundo caso: pessoa clicando no segundo num
    document.getElementById("display").innerHTML = ""
    document.getElementById("display").innerHTML += num
    n2 = num
  } 
  else{
    document.getElementById("display").innerHTML += num
    n2+= num //n1 = n1 + num
  }
} 

function apaga(){
  n1 = ""
  n2 = ""
  operador = ""
  resp = ""
  document.getElementById("display").innerHTML = ""
}

function leOperador(op){
  if(n1 !== ""){
    operador = op
    document.getElementById("display").innerHTML = op
  }
}
 
function calcular(event) {
  event.preventDefault()

  if (n1 !== "" && n2!== "" && operador != "") {
    switch (operador) {
      case "+":
        resp = parseInt(n1) + parseInt(n2);
        break;

      case "-":
        resp = parseInt(n1) - parseInt(n2);
        break;

      case "*":
        resp = parseInt(n1) * parseInt(n2);
        break;

      case "/":
        resp = parseInt(n1) / parseInt(n2);
        break;
      case "^":
        resp = 1;
        for(let i = 0 ; i < parseInt(n2); i++){
          resp*=n1;
        }
      default:
        break;
    }
    document.getElementById("display").innerHTML = "" + resp

    n1 = "" + resp;
    n2 = ""
    operador = ""
  }
}