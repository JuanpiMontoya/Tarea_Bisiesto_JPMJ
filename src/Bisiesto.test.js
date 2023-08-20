import esBisiesto from "./Bisiesto"

describe("Bisiesto", () => {
  it("Toma en cuenta el año como bisiesto si es 400 ", () => {
    const resultado = esBisiesto(400);
    expect(resultado).toEqual(true);
  });

  it("Toma en cuenta el año como bisiesto si es multiplo de 400 ", () => {
    const resultado = esBisiesto(2000);
    expect(resultado).toEqual(true);
  });

});


