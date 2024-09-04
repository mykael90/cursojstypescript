const chaveD = 'chaveDPlus';

const objetoA: {
  readonly chaveA: string; //chaveA não pode alterar
  chaveB: string;
  chaveC?: string; //chaveC opcional
  [chaveD]?: string; //valor de chave D a partir de uma constante
  [key: string]: unknown; //aqui é a tipagem da chave! as outras chaves devem ser strings e os valores serão do tipo unknown
} = {
  chaveA: 'Valor A',
  chaveB: 'Valor B',
};

objetoA.chaveB = 'Outro valor';
objetoA.chaveC = 'Novo valor';
objetoA.chaveD = 'Nova chave';
objetoA.chaveDplus = 'Novo valor';

console.log(objetoA);

// Module mode
export default 1;
