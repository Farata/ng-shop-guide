import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class ProductService {

  constructor(private http: Http) {}

  getAll(): Observable<Product[]> {
    return this.http.get('/data/products/all.json')
      .map(resp => resp.json());
  }

  getCategory(category: string): Observable<Product[]> {
    return this.http.get(`/data/products/${category}.json`)
      .map(resp => resp.json());
  }

  getProductById(productId: string): Observable<Product> {
    return this.http.get('/data/products/all.json')
      .map(resp => resp.json().find(p => p.id === productId));
  }

}

export interface Product {
  description: string;
  featured: boolean;
  imageUrl: string;
  price: number;
  title: string;
  id: string;
}
