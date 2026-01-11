/**
 * INTERFACE: IPerson
 * Utilidade: Define um "contrato". Qualquer classe que implementar IPerson 
 * é obrigada a ter as propriedades e métodos definidos aqui.
 */
interface IPerson {
  id: number;
  // name: string; // Comentado: se estivesse ativo, a classe seria obrigada a deixá-lo público
  // age: number;
  sayMyName(): string; // Obriga a classe a ter um método que retorna string
}

/**
 * CLASSE: Person
 * Utilidade: Implementa a interface acima e demonstra os modificadores de acesso.
 */
class Person implements IPerson {
  // readonly: O valor pode ser lido, mas nunca alterado após a inicialização.
  readonly id: number;

  // protected: A propriedade é acessível dentro desta classe e em classes que herdam dela (filhas).
  protected name: string;

  // private: A propriedade só é acessível dentro desta classe. Nem as filhas nem instâncias externas acessam.
  private age: number;

  constructor(id: number, name: string, age: number) {
    this.id = id;
    this.name = name;
    this.age = age;
  }

  sayMyName(): string {
    return this.name;
  }
}

/**
 * CLASSE: PersonRefact
 * Utilidade: Atalho de sintaxe (Parameter Properties). 
 * Ao colocar o modificador (readonly, private, etc) diretamente no construtor, 
 * o TS cria a propriedade e faz o "this.id = id" automaticamente para você.
 */
class PersonRefact {
  constructor(
    readonly id: number,
    protected name: string,
    private age: number
  ) {}
}

/**
 * CLASSE: Employee (Herança)
 * Utilidade: Demonstra como estender funcionalidades de outra classe.
 */
class Employee extends Person {
  constructor(id: number, name: string, age: number) {
    // super(): Chama o construtor da classe pai (Person)
    super(id, name, age);
  }

  whoImI() {
    // Funciona porque 'name' é PROTECTED na classe pai. 
    // Se fosse PRIVATE, daria erro aqui.
    return this.name; 
  }
}

/**
 * EXECUÇÃO E REGRAS
 */
const user = new Person(1, "felipe", 21);

// user.id = 123;      // ERRO: readonly impede atribuição.
// user.name;          // ERRO: protected só é visível dentro da classe ou subclasses.
// user.age;           // ERRO: private só é visível dentro da classe Person.
console.log(user.sayMyName()); // SUCESSO: Método público.