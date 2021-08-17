import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {

  //%23 is url-encoding of # for player tags
  private getPlayerUrl = 'https://api.clashofclans.com/v1/players/%23';
  constructor(private http: HttpClient) { }

  private httpOptions = {
    headers: new HttpHeaders(
      {
        'Content-type': 'application/json',
        Authorization: 'Bearer ' + environment.apitoken
      }
    )
  };
  public getPlayerByTag(): Observable<any>{
    return this.http.get<any>(this.getPlayerUrl+"RP9G9YQ9",this.httpOptions);
  }
}
