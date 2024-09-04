export function isNumber(value: unknown): value is number {
  //se a função retorna true, automaticamente value é um número, isso passa para frente
  return typeof value === 'number';
}

export function soma<T>(...args: T[]): number {
  const retorno = args.reduce((sum, value) => {
    if (isNumber(sum) && isNumber(value)) {
      return sum + value;
    }
    return sum;
  }, 0);

  return retorno;
}

console.log(soma(1, 2, 3));
console.log(soma<number | string>(...[1, 2, 3, 'a', 'b', 'c', 1])); //spread do vetor
console.log(soma<number | string>(1, 2, 3, 'a', 'b', 'c', 1));
console.log(soma('a', 'b', 'c'));
