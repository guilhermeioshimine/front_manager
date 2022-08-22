import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { first } from 'rxjs';
import { Inventory } from 'src/app/model/inventory';

@Injectable({
  providedIn: 'root',
})
export class InventoryService {
  private readonly API = 'api/inventory';
  private readonly APIHISTORY = 'api/inventory/history';

  constructor(private httpClient: HttpClient) {}

  list() {
    return this.httpClient.get<Inventory[]>(this.API).pipe(first());
  }

  listHistory() {
    return this.httpClient.get<Inventory[]>(this.APIHISTORY).pipe(first());
  }

  save(inventory: Inventory) {
    return this.httpClient.post<Inventory>(this.API, inventory).pipe(first());
  }
}
