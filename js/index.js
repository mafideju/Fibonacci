const fibonacci = (num) => {
  let a = 1, b = 0, c;

  while (num >= 0) {
    c = a;
    // console.log('a', a);
    a = a + b;
    b = c;
    console.log(c);
    num--;
  }

  // console.log(b);
}

fibonacci(8)
