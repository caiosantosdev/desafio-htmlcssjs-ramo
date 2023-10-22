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
    n2 = `${num}`
    console.log(num, n2)
  } 
  else{
    document.getElementById("display").innerHTML += num
    n2+= `${num}` //n1 = n1 + num
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
        console.log(n2);
        const maxIntervals = parseInt(n2); 
        console.log (maxIntervals);
        for(let i = 0 ; i < maxIntervals ; i++){
          resp*=parseInt(n1);
        }
        console.log(resp);
      default:
        break;
    }
    document.getElementById("display").innerHTML = "" + resp

    n1 = "" + resp;
    n2 = ""
    operador = ""
  }
}