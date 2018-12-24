const fibonacci = (index, cache) => {
  cache = cache || [];
  // console.log('cache', cache)

  if (cache[index]) {
    return cache[index];
  }
  else {
    if (index < 2) {
      return 1;
    }
    else {
      cache[index] = fibonacci(index - 1, cache) + fibonacci(index - 2, cache);
      return cache[index];
    }
  }
}

const teste = fibonacci(8);
console.log(teste)