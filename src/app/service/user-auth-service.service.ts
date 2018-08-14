import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { UserAuth } from '../class/user';

@Injectable()
export class UserAuthServiceService {

  //TODO: Change to env variables
  private OAUTH = environment.oauth;
  private CLIENTID = environment.clientid;
  private GRANTTYPE = environment.grantype;

  constructor(private _http: HttpClient) { }

  authenticaton(userAuth: UserAuth){
    let options = {headers: new HttpHeaders({
      'Content-Type' : 'application/x-www-form-urlencoded'
    })};
    let body = new URLSearchParams();
        body.set('username', userAuth.username);
        body.set('password', userAuth.password);
        body.set('grant_type', this.GRANTTYPE);
        body.set('client_id', this.CLIENTID);
    return this._http.post(this.OAUTH, body.toString(), options);
  }

}
