import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class ManiService {
  private api = 'http://localhost:3000/users';
  constructor(private httpclient: HttpClient) {}

  getProductById(id: number): Observable<any> {
    return this.httpclient.get(`${this.api}?id=${id}`);
    // return this.http.get(`${this.api}/findemp/${id}`);
  }
  getAll(): Observable<any> {
    return this.httpclient.get(`${this.api}`);
  }
}
