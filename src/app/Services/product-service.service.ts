import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IProduct } from '../Models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {

private httpOptions;
  constructor( private httpClient :HttpClient) { 
    this.httpOptions={ headers: new HttpHeaders({
      'Content-Type': 'application/json'
      // , Authorization': 'Token'
    })
  }
  }

  getAllProducts():Observable<IProduct[]>
  {
    return this.httpClient.get<IProduct[]>(`${environment.apiProductUrl}/Product`)
  }
  
  getProductById(prdId :number):Observable<IProduct>
  {
    return this.httpClient.get<IProduct>(`${environment.apiProductUrl}/Product/${prdId }`)
  }

  getProductByCategoryId(catId:number):Observable<IProduct[]>
  {
    return this.httpClient.get<IProduct[]>(`${environment.apiProductUrl}/Product?categoryId=${catId}`)
  }

  addProduct(newProduct :IProduct): Observable<IProduct>
  {
    return this.httpClient.post<IProduct>(`${environment.apiProductUrl}/Product`, JSON.stringify(newProduct),this.httpOptions);
  }

  updateProduct(prdId :number,updatedProduct:IProduct)
  {
    return this.httpClient.patch<IProduct>(`${environment.apiProductUrl}/Product/${prdId}`,updatedProduct)

  }
  deleteProduct(prdId :number)
  {
    return this.httpClient.delete<IProduct>(`${environment.apiProductUrl}/Product/${prdId}`);
    
  }
}
