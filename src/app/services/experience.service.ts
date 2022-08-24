import { Experience } from './../models/experience';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ExperienceService {
  experienceURL: string = 'https://backend-ap-luca-lagos.herokuapp.com/experience';
  constructor(private httpClient: HttpClient) {}
  public list(): Observable<Experience[]> {
    return this.httpClient.get<Experience[]>(this.experienceURL + '/list');
  }

  public detail(id: number): Observable<Experience> {
    return this.httpClient.get<Experience>(this.experienceURL + `/detail/${id}`);
  }

  public save(experience: Experience): Observable<any> {
    return this.httpClient.post<any>(this.experienceURL + '/add', experience);
  }

  public edit(id: number, experience: Experience): Observable<any> {
    return this.httpClient.put<any>(
      this.experienceURL + `/edit/${id}`,
      experience
    );
  }

  public delete(id: number): Observable<any> {
    return this.httpClient.delete<any>(this.experienceURL + `/delete/${id}`);
  }
}
