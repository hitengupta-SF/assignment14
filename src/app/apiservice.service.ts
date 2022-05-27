import { Injectable } from '@angular/core';
import {HttpClient, HttpClientModule} from '@angular/common/http'
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ApiserviceService {

  constructor( private _http:HttpClient) { }
  apiUrl='http://[::1]:3000/users';
  roleUrl='http://[::1]:3000/role';
  customerUrl='http://[::1]:3000/customer';
  
getAll():Observable<any>
{
  return this._http.get(`${this.apiUrl}`);
}

createData(data:any):Observable<any>
{
 // console.log(data,'createapi=>');
  
  return this._http.post(`${this.apiUrl}`,data);
}

deleteData(id:any):Observable<any>{
  let ids=id;
  return this._http.delete(`${this.apiUrl}/${ids}`);
}

updateData(data:any,id:any):Observable<any>{
  let ids=id;
return this._http.put(`${this.apiUrl}/${ids}`,data);
}

getSingleData(id:any):Observable<any>
{
  let ids=id;
  return this._http.get(`${this.apiUrl}/${ids}`);
}
getRoleValues():Observable<any>{
return this._http.get(`${this.roleUrl}`);
}




getAllCustomer():Observable<any>
{
  return this._http.get(`${this.customerUrl}`);
}

createDataCustomer(data:any):Observable<any>
{
 // console.log(data,'createapi=>');
  
  return this._http.post(`${this.customerUrl}`,data);
}

deleteDataCustomer(id:any):Observable<any>{
  let ids=id;
  return this._http.delete(`${this.apiUrl}/${ids}`);
}

updateDataCustomer(data:any,id:any):Observable<any>{
  let ids=id;
return this._http.put(`${this.apiUrl}/${ids}`,data);
}

getSingleDataCustomer(id:any):Observable<any>
{
  let ids=id;
  return this._http.get(`${this.apiUrl}/${ids}`);
}

}
