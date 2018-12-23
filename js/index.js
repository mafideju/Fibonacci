// // 1 2 3 5 8 13 21 34
// const fibonacci = (num) => {
//   if (num < 3) {
//     return 1;
//   }
//   else {
//     return fibonacci(num - 1) + fibonacci(num + 1);
//   }
// }
// fibonacci(9) // 34
const fibonacci = (num) => {
  let primeiro = 1, segundo = 0, anterior;

  while (num >= 0) {
    anterior = primeiro;
    primeiro = primeiro + segundo;
    segundo = anterior;
    num--;
  }

  console.log(segundo);
}

fibonacci(8)
// function fibonacci(position) {
//   if (position < 3) return 1;
//   else return fibonacci(position - 1) + fibonacci(position - 2);
// }

// fibonacci(6);

// Escreval(" 1° 0 ")
// Escreval(" 2° 1 ")
// resultAnterior < -0
// resultAtual < -1
// contador < -1
// ordem < -3
// Para contador de 1 ate(limite - 2) passo 1 faca
// fibo < -resultAnterior + resultAtual
// se(resultAnterior > 0)entao
// phi < -resultAtual / resultAnterior
// fimse
// Escreval(ordem, "°", fibo, " ", " PHI: ", phi: 2: 10)
// resultAnterior < -resultAtual
// resultAtual < -fibo
// contador < -contador + 1
// ordem < -ordem + 1
// FimPara