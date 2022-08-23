import { Injectable } from '@angular/core';
import { Skill } from '../models/skill';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SkillService {
  skillURL: string = 'http://localhost:8080/skill';
  constructor(private httpClient: HttpClient) {}
  public list(): Observable<Skill[]> {
    return this.httpClient.get<Skill[]>(this.skillURL + '/list');
  }

  public detail(id: number): Observable<Skill> {
    return this.httpClient.get<Skill>(this.skillURL + `/detail/${id}`);
  }

  public save(skill: Skill): Observable<any> {
    return this.httpClient.post<any>(this.skillURL + '/add', skill);
  }

  public edit(id: number, skill: Skill): Observable<any> {
    return this.httpClient.put<any>(this.skillURL + `/edit/${id}`, skill);
  }

  public delete(id: number): Observable<any> {
    return this.httpClient.delete<any>(this.skillURL + `/delete/${id}`);
  }
}
