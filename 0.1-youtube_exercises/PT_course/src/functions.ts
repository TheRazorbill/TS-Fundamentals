/**
 * INTERFACE: MathFunc
 * Utilidade: Esta é uma "Function Type Interface". 
 * Em vez de definir um objeto com propriedades, ela define a ASSINATURA de uma função.
 * Qualquer função que use essa interface DEVE aceitar dois números e retornar um número.
 */
interface MathFunc {
  (x: number, y: number): number;
}

/**
 * IMPLEMENTAÇÃO: sum
 * Utilidade: Aplica a interface MathFunc. 
 * O TS valida se os parâmetros (x, y) e o retorno são compatíveis com o contrato estabelecido.
 */
const sum: MathFunc = (x: number, y: number): number => {
  return x + y;
};

/**
 * IMPLEMENTAÇÃO: sub
 * Utilidade: Reutiliza a mesma interface. 
 * Isso é útil para garantir consistência em diferentes operações matemáticas.
 */
const sub: MathFunc = (x: number, y: number): number => {
  return x - y;
};

// Uso simples das funções tipadas
const value = sum(1, 2);

/**
 * FUNÇÃO: log
 * Utilidade: Demonstra o tipo de retorno 'void'.
 * 'void' indica que a função executa uma ação (efeito colateral), mas não retorna 
 * nenhum valor (ou retorna 'undefined'). É o padrão para logs ou salvar dados.
 */
const log = (message: string): void => {
  console.log(message);
};