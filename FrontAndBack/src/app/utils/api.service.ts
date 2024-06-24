import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';

@Injectable()
export class ApiService {
  constructor(private readonly httpClient: HttpClient) {}
  Get<T>(url: string, options: object = {}) {
    return this.httpClient.get<T>(url, options);
  }
  Post<T>(
    url: string,
    body: object,
    options: object = { 'Content-Type': 'application/json' }
  ) {
    return this.httpClient.post<T>(url, body, options);
  }
}
