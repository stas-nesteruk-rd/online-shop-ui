import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {ToastrService} from 'ngx-toastr';
import {map, tap} from 'rxjs/operators';

import {environment} from '../../../environments/environment';
import {Category} from '../interfaces';

@Injectable({ providedIn: 'root' })
export class CategoriesService {

  constructor(
    private http: HttpClient,
    private toastService: ToastrService
  ) {
  }

  create(category: Category): Observable<Category> {
    return this.http.post<Category>(`${environment.dbUrl}/categories.json`, category)
      .pipe(
        tap(() => this.toastService
          .success('Category was added successfully', 'Added Category')),
      );
  }

  fetch(): Observable<Category[]> {
    return this.http.get<Category[]>(`${environment.dbUrl}/categories.json`)
      .pipe(map((response: {[key: string]: any}) => {
        return Object
          .keys(response)
          .map(key => ({
            ...response[key],
            id: key,
          }));
      }));
  }
}
