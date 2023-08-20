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

  it("Toma en cuenta el año como NO bisiesto si es multiplo de 100 pero no de 400", () => {
    const resultado = esBisiesto(1800);
    expect(resultado).toEqual(false);
  });

  it("Toma en cuenta el año como bisiesto si es multiplo de 4 pero no de 100", () => {
    const resultado = esBisiesto(2008);
    expect(resultado).toEqual(true);
  });

});


