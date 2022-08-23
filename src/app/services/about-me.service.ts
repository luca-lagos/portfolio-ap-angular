import { Injectable } from '@angular/core';
import { AboutMe } from '../models/about-me';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AboutMeService {
  aboutMeURL: string = 'http://localhost:8080/about-me';
  constructor(private httpClient: HttpClient) {}
  public list(): Observable<AboutMe[]> {
    return this.httpClient.get<AboutMe[]>(this.aboutMeURL + '/list');
  }

  public detail(id: number): Observable<AboutMe> {
    return this.httpClient.get<AboutMe>(this.aboutMeURL + `/detail/${id}`);
  }

  public save(aboutMe: AboutMe): Observable<any> {
    return this.httpClient.post<any>(this.aboutMeURL + '/add', aboutMe);
  }

  public edit(id: number, aboutMe: AboutMe): Observable<any> {
    return this.httpClient.put<any>(this.aboutMeURL + `/edit/${id}`, aboutMe);
  }

  public delete(id: number): Observable<any> {
    return this.httpClient.delete<any>(this.aboutMeURL + `/delete/${id}`);
  }
}
