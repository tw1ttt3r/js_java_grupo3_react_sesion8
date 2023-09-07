// const nombre = require("./nombre");
import nombre from "./nombre";

describe("función de nombre", () => {
  test("nombre con 10 caracteres", () => {
    expect(nombre("pedro fragoso")).toBe("osogarf ordep");
  });

  test("función con nombre iniciado con p", () => {
    expect(nombre("pedro")).toBe("-pedro-");
  });
  
  test("función con nombre terminado con o", () => {
    expect(nombre("rodrigo")).toBe("radriga");
  });
  
  test("función con nombre que no cumple ninguna de las opciones", () => {
    expect(nombre("emilia")).toBe("emilia");
  });
});