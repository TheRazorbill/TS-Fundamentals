/**
 * TIPOS PRIMITIVOS
 * O TypeScript infere (descobre sozinho) o tipo se você atribuir o valor na criação,
 * ou você pode declarar explicitamente usando ': tipo'.
 */
let idadeUsuario = 5; // Aqui o TS inferiu 'number' automaticamente
const nomeUsuario: string = "rahian";
const entradaValidaNoFormulario: boolean = true;

/**
 * TIPO ANY
 * Utilidade: Desliga a verificação de tipos do TS para esta variável.
 * Cuidado: Deve ser usado apenas em casos extremos ou migrações de código JS antigo,
 * pois retira a segurança que o TypeScript oferece.
 */
let valorQualquer: any = 5;
valorQualquer = 12;
valorQualquer = true; // Não gera erro, mesmo mudando de número para booleano

/**
 * ARRAYS (LISTAS)
 * Utilidade: Garante que a lista não receba dados "sujos".
 * Se tentar dar um .push("texto") na 'listaIds', o TS gerará erro.
 */
const listaIds: number[] = [1, 2, 3, 4, 5];
const listaBools: boolean[] = [true, false, true, false];
const listaNomes: string[] = ["user", "usuario"];

/**
 * TUPLES (TUPLAS)
 * Utilidade: Arrays com tamanho fixo e tipos específicos para cada posição.
 * Muito comum em hooks (como o useState do React) ou coordenadas geográficas.
 */
const tuplaPessoa: [number, string] = [1, "user"]; // Posição 0 sempre number, 1 sempre string

// Array de tuplas: Uma lista onde cada item é um par [id, nome]
const listaTuplasPessoas: [number, string][] = [
  [1, "jao"],
  [2, "jane"],
];

/**
 * UNION TYPES (UNIÃO DE TIPOS)
 * Utilidade: Quando um dado pode vir de diferentes formas.
 * Exemplo: Um ID que pode vir do banco como número ou UUID (string).
 */
const idProdutoFlexivel: string | number | boolean = false;

/**
 * ENUMS (ENUMERAÇÕES)
 * Utilidade: Criar um conjunto de constantes nomeadas para facilitar a leitura.
 * Em vez de usar números "mágicos" (1, 2) no código, você usa nomes claros.
 */
enum Direcao {
  Up = 1,
  Down = 2,
  Left = "Esquerda",
}

const direcaoInicial = Direcao.Up; // O valor real aqui é 1

/**
 * TYPE ASSERTION (AFIRMAÇÃO DE TIPO)
 * Utilidade: Quando você (desenvolvedor) sabe mais sobre o tipo do que o TypeScript.
 * É como dizer: "Confia em mim, eu sei que esse dado que veio como 'any' é uma string".
 */
const nomeProdutoDesconhecido: any = "Bone";

// Sintaxe 'as' (recomendada, especialmente para quem usa React)
const nomeProdutoConvertido = nomeProdutoDesconhecido as string;

// Sintaxe '<>' (faz o mesmo, mas pode conflitar com tags HTML/JSX)
const nomeProdutoConvertidoAlternativo = <string>nomeProdutoDesconhecido;

console.log(idadeUsuario);