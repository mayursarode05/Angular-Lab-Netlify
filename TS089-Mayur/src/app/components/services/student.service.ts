import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, forkJoin, map, Observable, switchMap, tap, throwError } from 'rxjs';

// Root level injectable service
@Injectable({
  providedIn: 'root'
})
export class StudentService {

  dataURL:string = 'http://localhost:3000/mayur';

  constructor(private http:HttpClient) { }

  LogMessage = (msg:string) =>{
    console.log(msg);
  }

  GetAllData = ():Observable<StudentData[]> =>{
    return this.http.get<StudentData[]>(this.dataURL)
    .pipe(catchError(this.handleError),
    tap(data => console.log('tap method = '+JSON.stringify(data))),
    switchMap(data => this.fetchAdditionalData(data)),
    // map(data => data.map(x => ({...x,name:x.name.concat('mayur')})))
    );
  }

  private fetchAdditionalData(users: StudentData[]): Observable<StudentData[]> {
    // Simulate fetching additional data asynchronously (e.g., user permissions)
    const userObservables = users.map(user => this.http.get<any>(`${this.dataURL}/${user.id}`));
    return forkJoin(userObservables).pipe(
      map(results => {
        return users.map((user, index) => ({
          ...user,
          permissions: results[index].permissions // Assuming permissions are fetched for each user
        }));
      })
    );
  }

  GetByID = (id:string):Observable<StudentData> =>{
    return this.http.get<StudentData>(`${this.dataURL}/${id}`)
    .pipe(
      catchError(this.handleError),
      tap(d => console.log(d))
    );
  }

  AddStudent = (student:StudentData):Observable<StudentData> =>{
    return this.http.post<StudentData>(this.dataURL,student)
    .pipe(
      catchError(this.handleError),
      tap(d => console.log(d)))
  }

  UpdateStudent = (student:StudentData,id:string):Observable<StudentData> =>{
    return this.http.put<StudentData>(`${this.dataURL}/${id}`,student)
    .pipe(
      catchError(this.handleError),
      tap(d => console.log(d)))
  }

  deteteData = (id:string):Observable<void> =>{
    return this.http.delete<void>(`${this.dataURL}/${id}`)
    .pipe(
      catchError(this.handleError),
      tap(d => console.log(d)));
  }

  private handleError = (error:any):Observable<never> =>{
    alert('Error Occured'+error);
    return throwError('Something went wrong; please try again later.');
  }

  checkEmailExists = (email: string): Observable<boolean> => {
    return this.http.get<StudentData[]>(`${this.dataURL}?email=${email}`)
      .pipe(
        map(st => st.length > 0) // Check if any student with this email exists
      );
  }
}
export interface StudentData{
  id:string
  name:string
  city:string
}