export class Imovel {
  id?: number;
  nome?: string;
  tipo?: string[];
  valor?: number;
  condominio?: number;
  quartos?: number;
  banheiros?: number;
  mobiliado?: boolean;
  area?: number;
  venda?: boolean;
  aluguel?: boolean;
  dataAnuncio?: Date;
  endereco?: Endereco;
  proprietarioId?: number;
  constructor() {
  }

}

export class Endereco {
  id?: number;
  logradouro?: string;
  complemento?: string;
  bairro?: string;
  localidade?: string;
  uf?: string;
  cep?: string;
  numero?: number;
  cidade?: string;
  rua?: string;
  constructor() {
  }
}
