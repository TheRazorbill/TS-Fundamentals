/**
 * TYPE ALIAS (Order e User)
 * Utilidade: Define a estrutura de um objeto ou um apelido para um tipo.
 * Diferente da Interface, o 'type' é mais flexível para uniões e tipos primitivos.
 */
type Order = {
  productId: string;
  price: number;
};

type User = {
  firstName: string;
  age: number;
  email: string;
  // O ponto de interrogação (?) torna a propriedade OPCIONAL.
  password?: string; 
  orders: Order[]; // Array de objetos do tipo Order
  register(): string; // Método que deve retornar uma string
};

const user: User = {
  firstName: "User",
  age: 20,
  email: "jao@jao.com",
  orders: [{ productId: "a", price: 1 }],
  register() {
    return "Registrado";
  },
};

/**
 * NON-NULL ASSERTION OPERATOR (!)
 * Utilidade: O 'password' é opcional (pode ser undefined). 
 * O '!' diz ao TS: "Eu garanto que esse valor existe aqui, não se preocupe com o erro de undefined".
 */
const printLog = (message: string) => {};
printLog(user.password!); // Sem o '!', o TS reclamaria que 'string | undefined' não cabe em 'string'

/**
 * INTERSECTION TYPES (&)
 * Utilidade: Mescla dois ou mais tipos em um só. 
 * O objeto 'author' DEVE ter todas as propriedades de Author E de User.
 */
type Author = {
  books: string[];
};

const author: Author & User = {
  age: 2,
  books: ["Dom Casmurro"],
  email: "autor@email.com",
  firstName: "Machado",
  orders: [],
  register() {
    return "Autor registrado";
  },
};

/**
 * INTERFACES
 * Utilidade: Muito similar ao 'type', mas focada em descrever a forma de objetos/classes.
 * readonly: impede que o nome seja alterado após a criação do objeto.
 */
interface UserInterface {
  readonly firstName: string;
  email: string;
  login(): string;
}

const emailUser: UserInterface = {
  email: "contato@empresa.com",
  firstName: "Felipe",
  login() {
    return "Logado";
  },
};

/**
 * COMBINANDO INTERFACES E TYPES
 * Utilidade: Você pode fazer interseções misturando Interfaces e Types.
 */
interface AuthorInterface {
  books: string[];
}

const newAuthor: UserInterface & AuthorInterface = {
  email: "novo@autor.com",
  books: ["Livro A"],
  firstName: "Carlos",
  login() {
    return "Logado";
  },
};

/**
 * UNION TYPES EM ALIAS
 * Utilidade: Definir que uma nota (Grade) pode ser tanto uma letra quanto um número.
 */
type Grade = string | number;
const grade: Grade = 10; // ou "A+"