import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { map, tap } from 'rxjs';
import { saveAs } from 'file-saver';

interface File {
  originalname: string;
  filename: string;
  location: string;
}

@Injectable({
  providedIn: 'root',
})
export class FilesService {
  private readonly UPLOADS_API =
    'https://young-sands-07814.herokuapp.com/api/files/upload';

  constructor(private http: HttpClient) {}

  getFile(name: string, url: string, type: string) {
    return this.http.get(url, { responseType: 'blob' }).pipe(
      tap((content) => {
        const blob = new Blob([content], { type });
        saveAs(blob, name);
      }),
      map(() => true)
    );
  }

  uploadFile(file: Blob) {
    const dto = new FormData();
    dto.append('file', file);
    return this.http.post<File>(this.UPLOADS_API, dto);
  }
}
