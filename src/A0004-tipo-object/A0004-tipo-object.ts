const objetoA: {
  readonly chaveA: string; //chaveA não pode alterar
  chaveB: string;
  chaveC?: string; //chaveC opcional
  [key: string]: unknown; //as outras chaves devem ser strings e os valores serão do tipo unknown
} = {
  chaveA: 'Valor A',
  chaveB: 'Valor B',
};

objetoA.chaveB = 'Outro valor';
objetoA.chaveC = 'Novo valor';
objetoA.chaveD = 'Nova chave';

console.log(objetoA);

// Module mode
export default 1;
