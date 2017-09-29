import { Injectable } from '@angular/core';
import { Http, Response, RequestOptionsArgs, Headers } from '@angular/http';
import { Previsao } from './previsao.model';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class PrevisaoService {
  previsao:Previsao;
  private url:string = 'https://api.hgbrasil.com/weather/?format=json&city_name=';

  constructor(private http:Http) { }

  private extractData(res:Response) {
    let body = res.json();
    return body;
  }

  getPrevisaoWS(cidade:string):Promise<any> {
    console.log(this.url + cidade + "&key=ae6e1e6e");
    return this.http
    .get(this.url + cidade + "&key=ae6e1e6e")
    .toPromise()
    .then((res: Response) =>
      res.json());
  }
}
