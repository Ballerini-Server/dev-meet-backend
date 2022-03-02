interface Tipo {
  id: number;
  icon: string;
  text: string;
}

interface Event {
  id: string;
  tipoId: number;
  dataInicio: string;
  dataPublicacao: string;
  descricao: string;
  link: string;
  organizador: string;
  titulo: string;
}