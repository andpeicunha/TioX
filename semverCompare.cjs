// Importar a biblioteca semver
const semver = require("semver");

// Definir a função de teste
function test(val1, val2) {
  // Verificar se val1 é maior que val2 usando a função gt() da biblioteca semver
  return semver.gt(val1, val2);
}

// Exportar a função de teste para uso em outros módulos
module.exports = { test };
