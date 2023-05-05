import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http'; 
import { Student } from '../modal/student';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  private addStudUrl : string;
  private getStudUrl : string;
  private updateStudUrl : string;
  private deleteStudUrl : string;

  constructor(private http : HttpClient) { 

    this.addStudUrl = 'http://localhost:4650/addStudent';
    this.getStudUrl = 'http://localhost:4650/getAllStudents';
    this.updateStudUrl = 'http://localhost:4650/updateStudent';
    this.deleteStudUrl = 'http://localhost:4650/deleteStudentById';
  }

  addStudent(stud : Student): Observable<Student> {
      return this.http.post<Student>(this.addStudUrl,stud);
  }

  getAllStudents(): Observable<Student[]>{
      return this.http.get<Student[]>(this.getStudUrl);
  }

  updateStudent(stud : Student) : Observable<Student>{
      return this.http.put<Student>(this.updateStudUrl, stud);
  }
  
  deleteStudent(stud : Student) : Observable<Student> {
    return this.http.delete<Student>(this.deleteStudUrl+'/'+stud.id);
  }
}
