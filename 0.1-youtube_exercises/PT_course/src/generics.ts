/**
 * GENERICS EM ARROW FUNCTIONS
 * O <T> é um "espaço reservado" para um tipo que será definido no momento do uso.
 * Utilidade: Criar funções flexíveis que mantêm a tipagem original do dado.
 */
const returnValue = <T>(value: T): T => value;

// Aqui, o 'T' vira 'string'
const message = returnValue<string>("Hello"); 
// Aqui, o 'T' vira 'number'
const count = returnValue<number>(5);

/**
 * GENERICS EM FUNÇÕES NOMEADAS
 * <Type> (ou qualquer nome entre <>) indica que a função lidará com um tipo genérico.
 * Utilidade: Capturar o tipo dos itens de um array sem saber de antemão o que ele contém.
 */
function getFirstValueFromArray<Type>(array: Type[]) {
  return array[0]; // O retorno será automaticamente do tipo 'Type'
}

// O TS garante que o retorno será uma string
const firstValueFromStringArray = getFirstValueFromArray<string>(["1", "2"]);
// O TS garante que o retorno será um número
const firstValueFromNumberArray = getFirstValueFromArray<number>([10, 20]);

/**
 * PROMISSES (ASSINCRONISMO)
 * Utilidade: Tipar o que uma Promise vai "resolver".
 * Promise<number> indica que, quando a função terminar, ela entregará um número.
 */
const returnPromisse = async (): Promise<number> => {
  return 5;
};

/**
 * CLASSES GENÉRICAS
 * Utilidade: Criar estruturas de dados (como pilhas, filas ou calculadoras)
 * que podem operar em diferentes tipos de dados mantendo a lógica.
 */
class GenericNumber<T> {
  zeroValue: T; // O valor inicial será do tipo T
  sum: (x: T, y: T) => T; // A função de soma deve operar sobre o tipo T

  constructor(zeroValue: T, sum: (x: T, y: T) => T) {
    this.zeroValue = zeroValue;
    this.sum = sum;
  }
}

// Exemplo: Criando uma instância que opera especificamente com NÚMEROS
const myGenericNumber = new GenericNumber<number>(0, (x: number, y: number) => {
  return x + y;
});