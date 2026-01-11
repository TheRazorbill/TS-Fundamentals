// Demonstração de tipos primitivos em TypeScript
let idadeUsuario = 5;
const nomeUsuario: string = "rahian";
const entradaValidaNoFormulario: boolean = true;

// Tipo any: aceita qualquer valor, mas deve ser evitado em produção
let valorQualquer: any = 5;
valorQualquer = 12;
valorQualquer = true;

// Arrays tipados: garantem que todos os elementos sigam o mesmo tipo
const listaIds: number[] = [1, 2, 3, 4, 5];
const listaBools: boolean[] = [true, false, true, false];
const listaNomes: string[] = ["user", "usuario"];

// Tupla: número (id) + string (nome) em posições fixas
const tuplaPessoa: [number, string] = [1, "user"];

// Array de tuplas: útil para coleções com estrutura fixa
const listaTuplasPessoas: [number, string][] = [
    [1, "jao"],
    [2, "jane"]
];

// União de tipos: o ID pode ser string, number ou boolean
const idProdutoFlexivel: string | number | boolean = false;

// Enum: conjunto nomeado de valores possíveis
enum Direcao {
    Up = 1,
    Down = 2,
    Left = "Esquerda"
}

const direcaoInicial = Direcao.Up;

// Type assertion: dizendo ao TS qual é o tipo esperado
const nomeProdutoDesconhecido: any = "Bone";
// Usando as duas sintaxes de assertion (preferível `as`)
const nomeProdutoConvertido = nomeProdutoDesconhecido as string;
const nomeProdutoConvertidoAlternativo = <string>nomeProdutoDesconhecido;

console.log(idadeUsuario);