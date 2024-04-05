import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) {}

  APIUrl = "https://art-of-ai-auction.jedlik.cloud"

  getCategories(): Observable<any[]> {
    return this.http.get<any[]>(this.APIUrl + '/api/categories')
  }

  getPaintings(categoryId: string) : Observable<any[]> {
    return this.http.get<any[]>(this.APIUrl + `/api/paintings/${categoryId}`)}

  sendBid(model:any):Observable<any>{
    return this.http.post<any>(`${this.APIUrl}/api/bid`, model);
  }
}

