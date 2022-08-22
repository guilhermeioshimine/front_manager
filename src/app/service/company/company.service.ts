import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap, first } from 'rxjs/operators';
import { Company } from 'src/app/model/company';

@Injectable({
  providedIn: 'root',
})
export class CompanyService {
  private readonly API = 'api/company';
  id!: Number;

  constructor(private httpClient: HttpClient) {}

  list() {
    return this.httpClient.get<Company[]>(this.API).pipe(first());
  }

  save(company: Company) {
    return this.httpClient.post<Company>(this.API, company).pipe(first());
  }

  listById(companyId: number) {
    let queryParams = new HttpParams();
    queryParams = queryParams.append('id', companyId);
    return this.httpClient
      .get<Company>(this.API + '/byId', { params: queryParams })
      .pipe(first());
  }

  update(company: Company) {
    let queryParams = new HttpParams();
    queryParams = queryParams.append('id', company.id);
    return this.httpClient
      .put<Company>(this.API, company, { params: queryParams })
      .pipe(first());
  }

  delete(companyId: number) {
    let queryParams = new HttpParams();
    queryParams = queryParams.append('id', companyId);
    return this.httpClient
      .delete<Company>(this.API, { params: queryParams })
      .pipe(first());
  }
}
