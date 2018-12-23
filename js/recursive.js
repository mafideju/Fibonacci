function fibonacci(position) {
  if (position < 2) return 1;
  else return fibonacci(position - 1) + fibonacci(position - 2);
}

const teste = fibonacci(8);
console.log(teste)