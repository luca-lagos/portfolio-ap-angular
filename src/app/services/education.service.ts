import { Injectable } from '@angular/core';
import { Education } from '../models/education';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class EducationService {
  educationURL: string = 'http://localhost:8080/education';
  constructor(private httpClient: HttpClient) {}
  public list(): Observable<Education[]> {
    return this.httpClient.get<Education[]>(this.educationURL + '/list');
  }

  public detail(id: number): Observable<Education> {
    return this.httpClient.get<Education>(this.educationURL + `/detail/${id}`);
  }

  public save(education: Education): Observable<any> {
    return this.httpClient.post<any>(this.educationURL + '/add', education);
  }

  public edit(id: number, education: Education): Observable<any> {
    return this.httpClient.put<any>(
      this.educationURL + `/edit/${id}`,
      education
    );
  }

  public delete(id: number): Observable<any> {
    return this.httpClient.delete<any>(this.educationURL + `/delete/${id}`);
  }
}
