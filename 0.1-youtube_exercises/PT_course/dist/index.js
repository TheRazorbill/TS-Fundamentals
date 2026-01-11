"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Demonstração de tipos primitivos em TypeScript
let idadeUsuario = 5;
const nomeUsuario = "rahian";
const entradaValidaNoFormulario = true;
// Tipo any: aceita qualquer valor, mas deve ser evitado em produção
let valorQualquer = 5;
valorQualquer = 12;
valorQualquer = true;
// Arrays tipados: garantem que todos os elementos sigam o mesmo tipo
const listaIds = [1, 2, 3, 4, 5];
const listaBools = [true, false, true, false];
const listaNomes = ["user", "usuario"];
// Tupla: número (id) + string (nome) em posições fixas
const tuplaPessoa = [1, "user"];
// Array de tuplas: útil para coleções com estrutura fixa
const listaTuplasPessoas = [
    [1, "jao"],
    [2, "jane"]
];
// União de tipos: o ID pode ser string, number ou boolean
const idProdutoFlexivel = false;
// Enum: conjunto nomeado de valores possíveis
var Direcao;
(function (Direcao) {
    Direcao[Direcao["Up"] = 1] = "Up";
    Direcao[Direcao["Down"] = 2] = "Down";
    Direcao["Left"] = "Esquerda";
})(Direcao || (Direcao = {}));
const direcaoInicial = Direcao.Up;
// Type assertion: dizendo ao TS qual é o tipo esperado
const nomeProdutoDesconhecido = "Bone";
// Usando as duas sintaxes de assertion (preferível `as`)
const nomeProdutoConvertido = nomeProdutoDesconhecido;
const nomeProdutoConvertidoAlternativo = nomeProdutoDesconhecido;
console.log(idadeUsuario);
//# sourceMappingURL=index.js.map