export function validarId(id) {
  const esEntero = Number.isInteger(id);
  const esPositivo = id > 0;

  return esEntero && esPositivo;
}