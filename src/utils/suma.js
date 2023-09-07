function suma(numeros) { // arreglo de número
  if (numeros.length === 2) {
    return numeros[0] + numeros[1];
  } else {
    return numeros.reduce((p, c) => {
      if (c % 2 === 0) return c + p
      return p
    }, 0);
  }
}

export default suma;
// module.exports = suma;

// ESM ecmascript modules

// prueba de escritorio

// entrada [4,6]
// return 10

// entrada []
// return 0