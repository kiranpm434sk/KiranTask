import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmpdataService {

  url: string = 'https://3df52e24.ngrok.io/api/Settings/GetDesignations';
  url1: string='https://3df52e24.ngrok.io/api/Settings/InsUpdateDesignation';
  url2:string ='https://3df52e24.ngrok.io/api/Settings/DeleteDesignation?DesignationId=';
  constructor(private _http: HttpClient) {}

  getAllEmployees() {
    return this._http.get(this.url);
  }


  addEmployees(item) {
    let body = JSON.stringify(item);
    let head = new HttpHeaders().set("Content-Type", "application/json");
    return this._http.post(this.url1, body, { headers: head });
  }
  editEmployees(item) {
    console.log(item);
    let body = JSON.stringify(item);
    let head = new HttpHeaders().set("Content-Type", "application/json");
    return this._http.put(this.url1+ item.id, body, { headers: head });
  }
  deleteEmployees(DesignationId) {
    console.log(DesignationId);
    let head = new HttpHeaders().set("Content-Type", "application/json");
    return this._http.post(this.url2 + DesignationId, { headers: head });
  }
}
