import { Component, OnInit } from '@angular/core';
import { PrevisaoService } from './previsao.service';
import { Previsao } from './previsao.model';
import { Results } from './results.model';
import 'rxjs/add/operator/toPromise';
import { RequestOptionsArgs, Headers } from '@angular/http';

@Component({
  selector: 'app-previsao',
  templateUrl: './previsao.component.html',
  styleUrls: ['./previsao.component.css']
})
export class PrevisaoComponent implements OnInit {

  private previsaoServico:PrevisaoService;
  private previsao:Previsao;
  private results:Results;
  public cidade:string;
  private url:string = "https://api.hgbrasil.com/weather/?format=json&city_name=" + 'Santos' + "&key=ae6e1e6e";

  constructor(private previsaoService:PrevisaoService) {
    this.results = new Results(null, null, null, null, null, null, null);
    this.previsao = new Previsao(null, null, this.results);
  }

  ngOnInit() {
    this.previsaoService.getPrevisaoWS(this.cidade).
    then((previsao: Previsao) => {
      this.previsao = previsao;
      this.results = previsao.results;
    }).catch(err => {
      console.log(err);
    })
  }

  getPrevisaoWS(cidade:string) {
    this.previsaoService.getPrevisaoWS(this.cidade).
    then((previsao: Previsao) => {
      this.previsao = previsao;
      this.results = previsao.results;
    }).catch(err => {
      console.log(err);
    })
    return null;
  }

}
