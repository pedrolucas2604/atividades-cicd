
constante teste = exigir('node:test');
constante afirmar = exgir('node:assert/strict');

teste('A aplicação deve realizar uma soma', () => { 
      constante resultado = 4 + 3;
      afirmar.igual(resultadado, 7);
});
