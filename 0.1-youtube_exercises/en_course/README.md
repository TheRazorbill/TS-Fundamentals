# Curso Definitivo de TypeScript: Notas e Guia Prático

Este documento resume os conceitos fundamentais do TypeScript abordados no curso, desde a configuração básica até tipos avançados.

## 1. Introdução e Configuração

### O que é TypeScript?
O TypeScript é um superconjunto (superset) do JavaScript criado pela Microsoft.
- **JavaScript:** Dinâmico. É como uma criança sem disciplina; faz o que quer. Erros só aparecem quando o código roda (runtime).
- **TypeScript:** Estático. É como uma criança disciplinada. Adiciona tipagem estática para capturar erros durante a compilação (antes de rodar).

### Configuração do Ambiente
1.  **Instalar Node.js:** Necessário para rodar o NPM.
2.  **Instalar TypeScript globalmente:**
    ```bash
    npm install -g typescript
    ```
    *(No Mac/Linux, pode ser necessário usar sudo).* 
3.  **Compilar um arquivo:**
    ```bash
    tsc index.ts
    ```
    Isso gera um arquivo `index.js` (JavaScript puro).

### Configurando o Compilador (`tsconfig.json`)
Para não precisar configurar o compilador manualmente a cada vez, criamos um arquivo de configuração.

1.  Gerar o arquivo:
    ```bash
    tsc --init
    ```
2.  **Configurações Importantes (Destaques):**
    * `"target": "es2016"`: Define a versão do JS gerado.
    * `"rootDir": "./src"`: Onde ficam seus arquivos `.ts`.
    * `"outDir": "./dist"`: Onde ficarão os arquivos `.js` compilados.
    * `"removeComments": true`: Remove comentários do JS final.
    * `"noEmitOnError": true`: Não gera o arquivo JS se houver erro no TS (configuração crucial para segurança).

## 2. Tipos Básicos (Fundamentals)

No TypeScript, se você não tipar, ele tenta "inferir" (adivinhar) o tipo baseado no valor.

### Variáveis e O Tipo `any`
O tipo `any` desliga a checagem do TypeScript. **Evite usar.**

```typescript
// Errado (perde a segurança do TS)
let nivel; // Tipo 'any' inferido
nivel = 1;
nivel = 'a';

// Correto (Anotação de Tipo)
let vendas: number = 123456789;
let curso: string = 'TypeScript';
let estaPublicado: boolean = true;

```

> **Dica:** No `tsconfig.json`, ative `"noImplicitAny": true` para impedir variáveis sem tipo definido.

### Arrays

Vetores tipados garantem que você não misture dados incorretamente.

```typescript
// Array apenas de números
let numeros: number[] = [1, 2, 3];

// O Intellisense do editor sugere métodos de número automaticamente
numeros.forEach(n => n.toFixed(2));

```

### Tuplas (Tuples)

Arrays de tamanho fixo onde cada elemento tem um tipo específico. Útil para pares chave-valor.

```typescript
// Um par: ID (number) e Nome (string)
let usuario: [number, string] = [1, 'Rahian'];

// Métodos específicos para cada posição
usuario[0].toFixed(); // Método de número
usuario[1].toUpperCase(); // Método de string

```

*Recomendação: Restrinja tuplas a 2 valores para manter a legibilidade.*

### Enums

Lista de constantes relacionadas.

```typescript
// Usando 'const enum' gera código JS mais otimizado
const enum Tamanho {
  Pequeno = 1,
  Medio = 2,
  Grande = 3
}

let meuTamanho: Tamanho = Tamanho.Medio;
console.log(meuTamanho); // Saída: 2

```

### Funções

Sempre anote os tipos dos parâmetros e o tipo do retorno.

```typescript
// Parâmetros tipados e retorno tipado (: number)
function calcularImposto(renda: number, anoFiscal = 2022): number {
  if (anoFiscal < 2022) {
    return renda * 1.2;
  }
  return renda * 1.3;
}

// O segundo parâmetro tem um valor padrão, tornando-o opcional na chamada
calcularImposto(10000);

```

### Objetos

Definindo a "forma" de um objeto.

```typescript
let empregado: {
  readonly id: number; // 'readonly' impede alteração após criação
  nome: string;
  aposentar: (data: Date) => void; // Definindo assinatura de método
} = {
  id: 1,
  nome: 'Rahian',
  aposentar: (data: Date) => {
    console.log(data);
  }
};

```

## 3. Tipos Avançados

### Type Aliases (Apelidos de Tipo)

Para evitar repetição de código (DRY - Don't Repeat Yourself), criamos definições de tipos reutilizáveis.

```typescript
// Definindo a "forma" uma única vez
type Empregado = {
  readonly id: number;
  nome: string;
  aposentar: (data: Date) => void;
}

// Reutilizando
let funcionario1: Empregado = { /* ... */ };
let funcionario2: Empregado = { /* ... */ };

```

### Union Types (Tipos de União)

Quando uma variável pode ser de mais de um tipo. Usamos a barra vertical `|`.

```typescript
function converterPeso(peso: number | string): number {
  // Narrowing (Estreitamento): O TS precisa saber qual tipo é para sugerir métodos
  if (typeof peso === 'number') {
    return peso * 2.2;
  } else {
    return parseInt(peso) * 2.2;
  }
}

converterPeso(10);
converterPeso("10kg");

```

### Intersection Types (Tipos de Interseção)

Combina dois tipos em um só. Usamos o `&`.

```typescript
type Arrastavel = {
  arrastar: () => void;
}

type Redimensionavel = {
  redimensionar: () => void;
}

// O tipo UIWidget deve ter AMBAS as propriedades
type UIWidget = Arrastavel & Redimensionavel;

let caixaTexto: UIWidget = {
  arrastar: () => {},
  redimensionar: () => {}
};

```

### Literal Types

Limita uma variável a valores exatos e específicos.

```typescript
type Quantidade = 50 | 100;
let qtd: Quantidade = 100; // Válido
// let qtd: Quantidade = 51; // Erro!

```

### Nullables e Optional Chaining

Por padrão, o TS é rigoroso com null e undefined (Strict Null Checks).

```typescript
type Cliente = {
  aniversario?: Date; // O '?' torna a propriedade opcional (pode ser undefined)
};

function getCliente(id: number): Cliente | null | undefined {
  return id === 0 ? null : { aniversario: new Date() };
}

let cliente = getCliente(1);

// Optional Property Access Operator (?.)
// Só executa .getFullYear() se 'cliente' não for null/undefined E 'aniversario' existir
console.log(cliente?.aniversario?.getFullYear());

```

## 4. Dicas de Debugging (VS Code)

Para depurar TypeScript diretamente no VS Code:

1. No `tsconfig.json`, ative `"sourceMap": true`. Isso cria um mapa que liga o JS compilado ao seu código TS original.
2. No painel de Debug do VS Code, crie um `launch.json`.
3. Adicione `"preLaunchTask": "tsc: build"` para garantir que ele compile antes de debugar.
4. Use `F5` para iniciar e `F10` para pular linha a linha (Step Over).

## Resumo das Melhores Práticas

- **Evite `any`:** Sempre que possível.
- **Ative o Modo Estrito:** Use `"strict": true` no `tsconfig.json` para maior segurança.
- **Use Type Aliases:** Para definir formas de objetos complexos e reutilizá-los.
- **Trate Nulos:** Use Union Types (`string | null`) e Optional Chaining (`?.`) para evitar quebras em runtime.
Aqui está o conteúdo do vídeo transformado em um guia de estudo estruturado em Markdown (`.md`), traduzido para o português e organizado com exemplos práticos de código, focado no seu objetivo de aprender construindo e entendendo os detalhes.