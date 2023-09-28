import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ImageService {
  constructor(private http: HttpClient) {}

  // Example method to upload an image
  uploadImage(image: File, token: string): Observable<any> {
    // Create HttpHeaders with the token
    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`,
    });

    // Create FormData with the image
    const formData = new FormData();
    formData.append('image', image);

    // Adjust the API endpoint as needed
    const apiUrl = 'https://stox24.com/admin/api/create-deposit-request';

    // Send the HTTP POST request with headers and form data
    return this.http.post(apiUrl, formData, { headers });
  }

  // You can add more methods for image-related operations here
}
