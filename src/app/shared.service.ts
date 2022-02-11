import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  public isVisibleIngreso = false;
  readonly APIUrl="http://localhost:61373/api";

  constructor(private http:HttpClient) { }

  // Maestro de Usuarios:

  getUserList():Observable<any[]>{
    return this.http.get<any>(this.APIUrl+'/usuario')
  }

  addUser(val:any){
    return this.http.post(this.APIUrl+'/usuario', val)
  }

  updateUser(val:any){
    return this.http.put(this.APIUrl+'/usuario', val)
  }

  deleteUser(val:any){
    return this.http.delete(this.APIUrl+'/usuario/'+val)
  }
  loginUser(val:any){
    return this.http.post(this.APIUrl+'/login', val)
  }

  // Maestro de Productos:
  getMasterProductList():Observable<any[]>{
    return this.http.get<any>(this.APIUrl+'/producto')
  }

  addMasterproduct(val:any){
    return this.http.post(this.APIUrl+'/producto', val)
  }

  updateMasterproduct(val:any){
    return this.http.put(this.APIUrl+'/producto', val)
  }

  deleteMasterProduct(val:any){
    return this.http.delete(this.APIUrl+'/producto/'+val)
  }
}
