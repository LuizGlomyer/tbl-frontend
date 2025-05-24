import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API_URL } from '../utils/utils';
import { catchError, Observable, throwError } from 'rxjs';
import { APIRequest, MediaEntity } from '../models/types';

@Injectable({
  providedIn: 'root',
})
export class MediaService {
  private PATH = 'media';

  constructor(private http: HttpClient) {}

  findAll(): Observable<APIRequest<MediaEntity>> {
    return this.http
      .get<APIRequest<MediaEntity>>(`${API_URL}/${this.PATH}`)
      .pipe(
        catchError((error) => {
          console.error('Error in MediaService.findAll:', error);
          return throwError(() => error);
        })
      );
  }
}
