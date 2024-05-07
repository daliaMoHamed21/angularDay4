import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IProduct } from '../Models/iproduct';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class FakeApiProductService {
  baseUrl: string ='http://localhost:3002/products';
  constructor( private http:HttpClient) { }

  getAll(): Observable<IProduct[]> {
    return this.http.get<IProduct[]>(this.baseUrl);
  }

  getById(id: number): Observable<IProduct> {
    return this.http.get<IProduct>(`${this.baseUrl}/${id}`);
  }
  

  Add(prod: IProduct) {
    return this.http.post(this.baseUrl, prod);
  }

  Edit(id: number, prod: IProduct) {
    return this.http.put(`${this.baseUrl}/${id}`, prod);
  }

  Delete(id: number) {
    return this.http.delete(`${this.baseUrl}/${id}`);
  }
}