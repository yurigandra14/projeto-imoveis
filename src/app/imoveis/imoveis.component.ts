import {Component, OnInit} from '@angular/core';
import {Endereco, Imovel} from "../model/imoveis-model";
import {ImoveisService} from "../service/imoveis.service";

@Component({
  selector: 'app-imoveis',
  templateUrl: './imoveis.component.html',
  styleUrls: ['./imoveis.component.css']
})
export class ImoveisComponent implements OnInit{

  imoveis: Imovel[] = [];
  imovel: Imovel = new Imovel();
  visualizar: boolean = false;
  addImovel: Boolean = false;
  ehMobiliado: boolean = false;
  ehAlugar: boolean = false;
  cep: string = '';
  tipo: string = '';

  constructor(private imoveisService: ImoveisService) {
  }

  ngOnInit() {
    this.buscarImoveis()
  }

  private buscarImoveis(): void {
    this.imoveisService.buscarImoveis()
      .subscribe(res => {
        this.imoveis = res;
      });
  }

  public visualizarImovel(idImovel: number): void {
    this.imovel = this.imoveis.filter(item => item.id == idImovel)[0];
    this.visualizar = true;
  }

  public fecharVisualizacao(): void {
    this.imovel = new Imovel();
    this.visualizar = false;
  }

  public excluirImovel(idImovel: number): void {
    this.imoveisService.excluirImovel(idImovel).subscribe();
    this.buscarImoveis();
  }

  public incluirImovel(): void {
    this.imovel.endereco = this.imoveisService.buscarEnderecoPorCep(this.cep)
    this.imovel.tipo = (this.tipo.split(' '));
    this.imoveisService.incluirImovel(this.imovel)
      .subscribe();
    this.imovel = new Imovel();
    this.cep = '';
    this.tipo = '';
    this.addImovel = false;
    this.buscarImoveis();
  }

  public adicionarImovel(): void {
    this.addImovel = true;
  }

  public fechar(): void {
    this.addImovel = false;
  }

  public ehVenda(): void {
    this.imovel.aluguel = false;
    this.imovel.venda = true;
  }

  public ehAluguel(): void {
    this.imovel.aluguel = true;
    this.imovel.venda = false;
  }

  public setarMobiliadoTrue(): void {
    this.imovel.mobiliado = true;
  }

  public setarMobiliadoFalse(): void {
    this.imovel.mobiliado = false;
  }
}
