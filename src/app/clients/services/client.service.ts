import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Client } from '../models/client';
import { Observable } from 'rxjs/Observable';
const BASE_URL = 'http://localhost:3000/api';
@Injectable()
export class ClientService {

  constructor(private httpClient: HttpClient) { }

  getClients(): Observable<Client[]> {
    return this.httpClient.get<Client[]>(`${BASE_URL}/clients`);
  }
  createClient(body: Client): Observable<Client> {
    return this.httpClient.post<Client>(`${BASE_URL}/clients`, body);
  }
  getClient(id: string): Observable<Client> {
    return this.httpClient.get<Client>(`${BASE_URL}/clients/${id}`);
  }

}
