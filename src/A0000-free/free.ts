//generic type para o parâmetro da função, ao chamar a função "deve" ser informado o tipo, caso não seja inferido automaticamente pelo argumento
function identity<T>(args: T): T {
  return args;
}

// informando o tipo <string[]> ao chamar a função
console.log(identity<string[]>(['a', 'b', 'c']));

// tipo <string[]> inferido automaticamente pelo typescript e atribuído ao generic da função
console.log(identity(['a', 'b', 'c']));

// tipagem da função como um todo, a função identity atende a tipagem pré-estabelecida
const myIdentity: <U>(args: U) => U = identity;

console.log(myIdentity(['d', 'e', 'f']));

// tipagem da função como um todo, declarando a função após tipagem, não precisa tipar novamente
const myIdentityDeclare: <U>(args: U) => U = (args) => args;

// tipo <string[]> inferido automaticamente pelo typescript e atribuído ao generic da função
console.log(myIdentityDeclare(['d', 'e', 'f']));

// tipagem da função como um todo, declarando a função após tipagem, se quiser tipar novamente tudo bem
const myIdentityDeclare1: <U>(args: U) => U = <T>(args: T): T => args;

// tipo <string[]> inferido automaticamente pelo typescript e atribuído ao generic da função
console.log(myIdentityDeclare1(['d', 'e', 'f']));

//criando um type para a assinatura da funcão - 1ª forma
type IdentityType1 = <U>(args: U) => U;

//reescrevendo a função myIdentity, usando o type
const myIdentity1: IdentityType1 = identity;
console.log(myIdentity1([1, 2, 3]));

// tipagem da função como um todo, a função identity atende a tipagem pré-estabelecida, 2ª forma
const myIdentity2: { <U>(args: U): U } = identity;
console.log(myIdentity2([1, 2, 3]));

//criando um type para a assinatura da funcão - 2ª forma
type IdentityType2 = { <U>(args: U): U };

//reescrevendo a função myIdentity, usando o type
const myIdentity3: IdentityType2 = identity;
console.log(myIdentity3([1, 2, 3]));

//passando o type para o tipo ou interface
interface IdentityType3<U> {
  (args: U): U;
}

//reescrevendo a função, perceba que o tipo do genérico é informado ao chamar a interface
const myIdentity4: IdentityType3<number[]> = identity;

//agora chama a função com o array de number, se colocar o array com outro tipo não vai funcionar
console.log(myIdentity4([1, 2, 3]));

//funcao com rest operator
function funcao10(...args: any[]) {
  console.log(args);
}

funcao10(1, 2, 3, 4, 'a', 'b');
funcao10(...[1, 2, 3, 4, 'a', 'b']);
