// const suma = require("./suma");
import suma from "./suma";

describe("funcionalidad de suma", () => {

  test("suma de 2 números", () => {
    expect(suma([4,6])).toBe(10);
  });
  
  test("arreglo vacio", () => {
    expect(suma([])).toBe(0);
  });
  
  test("suma de 5 números", () => {
    expect(suma([1,3,4,7,9])).toBe(4);
  });

});