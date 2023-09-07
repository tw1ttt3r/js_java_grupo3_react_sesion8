function nombre(nombre) {
  if (nombre.length > 10) {
    return nombre.split("").reverse().join("");
  }

  if (nombre[0].toLowerCase() === 'p') {
    return `-${nombre}-`;
  }

  if (nombre[nombre.length - 1].toLowerCase() === 'o') {
    return nombre.split("").reduce((p, c) => {
      if (c.toLowerCase() === 'o') return p+'a'
      return p+c
    }, "");
  }

  return nombre;
}

// module.exports = nombre;
export default nombre;

// entrada "rodrigo"
// return ""


