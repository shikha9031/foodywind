import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CookingBackendService {

  constructor(private _httpClient:HttpClient) { }

  sendEmail(param){
    let dataToBeSent = {
      "method":"email",
      "data": param
    }
    return this._httpClient.post<any>('https://foodywind.in/backend/operations.php', dataToBeSent);
  }
}
