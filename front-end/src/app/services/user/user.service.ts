import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { UserDTO } from '../../interfaces/user-dto';
import { Router } from '@angular/router'
import { environment } from '../../environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient: HttpClient, private router: Router) { }

  private baseUrl = `${environment.backendUrl}/api/users`;


  generateAndDownloadUsers(count: number): Observable<void> {
    return this.httpClient.get<void>(`${this.baseUrl}/generate?count=${count}`);
  }

  uploadUserFile(file: File): Observable<any> {
    const formData: FormData = new FormData();
    formData.append('file', file, file.name);
    return this.httpClient.post<any>(`${this.baseUrl}/batch`, formData);
  }


  getUsers(page: number, size: number): Observable<UserDTO[]> {
    const headers = this.getHeaders();
    return this.httpClient.get<any>(`${this.baseUrl}/getUsers?page=${page}&size=${size}`, { headers }).pipe(
      map((page: any) => page.content as UserDTO[])
    );
  }

  getPaginatedUsersTotalPages(page: number, size: number): Observable<any> {
    const headers = this.getHeaders();
    return this.httpClient.get<any>(`${this.baseUrl}/getUsers?page=${page}&size=${size}`, { headers }).pipe(
      map((page: any) => page.totalPages)
    );
  }

  getUserByEmail(email: string): Observable<UserDTO> {
    const headers = this.getHeaders();
    return this.httpClient.get<UserDTO>(`${this.baseUrl}/email/${email}`, { headers });
  }

  getUserByUsername(username: string): Observable<UserDTO> {
    const headers = this.getHeaders();
    return this.httpClient.get<UserDTO>(`${this.baseUrl}/${username}`, { headers });
  }

  getMyUser(): Observable<UserDTO> {
    const headers = this.getHeaders();
    return this.httpClient.get<UserDTO>(`${this.baseUrl}/me`, { headers });
  }


  isUserAdmin(): boolean {
    let role: any
    if (typeof window !== 'undefined') {
      role = localStorage.getItem('userRole');
      if (role === "ADMIN")
        return true
    }
    return false
  }
  isUserConnected(): boolean {
    if (typeof window !== 'undefined') {
      if (localStorage.getItem('accessToken')) {
        return true;
      }
    }
    return false

  }
  private getHeaders(): HttpHeaders {
    let token: any
    if (typeof window !== 'undefined') {
      token = localStorage.getItem('accessToken');
      if (!token) {
        // Token is not available, redirect to the login page
        this.router.navigate(['/login']);
      }
    }
    return new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
  }


}
