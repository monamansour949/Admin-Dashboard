import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Icategory } from '../Models/icategory';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  private httpOptions;
  constructor(private httpClient :HttpClient) {

    this.httpOptions={ headers: new HttpHeaders({
      'Content-Type': 'application/json'
      // , Authorization': 'Token'
    })
  }

   }

   getAllCategories():Observable<Icategory[]>
   {
     return this.httpClient.get<Icategory[]>(`${environment.apiProductUrl}/Category`)
   }
   
   getCategoryById(catId :number):Observable<Icategory>
   {
     return this.httpClient.get<Icategory>(`${environment.apiProductUrl}/Category/${catId }`)
   }
 
 
   addCaregory(NewCategory :Icategory): Observable<Icategory>
   {
     return this.httpClient.post<Icategory>(`${environment.apiProductUrl}/Category`, JSON.stringify(NewCategory),this.httpOptions);
   }
 
   updateCategory(catId :number,updatedCategory:Icategory)
   {
     return this.httpClient.patch<Icategory>(`${environment.apiProductUrl}/Category/${catId}`,updatedCategory)
 
   }
   deleteCategory(catId :number)
   {
     return this.httpClient.delete<Icategory>(`${environment.apiProductUrl}/Category/${catId}`);
     
   }
}
