const { getCarro, getMoto, getCaminhao } = require('./matrizes');

// Testar carros
test('getCarro retorna o monza', () => {
  expect(getCarro('monza')).toEqual({
    modelo: "monza",
    cilindrada: "2000",
    marca: "chevrolet",
    ano: "1993"
  });
});

// Testar motos
test('getMoto retorna a ninja', () => {
  expect(getMoto('ninja')).toEqual({
    modelo: "ninja",
    cilindrada: "600",
    marca: "kawasaki",
    ano: "2018"
  });
});

// Testar caminhões
test('getCaminhao retorna o volvo fh', () => {
  expect(getCaminhao('volvo fh')).toEqual({
    modelo: "volvo fh",
    cilindrada: "13000",
    marca: "volvo",
    ano: "2022"
  });
});
