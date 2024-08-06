import { Injectable } from '@angular/core';
import { Student } from './model/Student';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class Studentservice{
  url :string;
  studentArr : Student[];
  student : Student;
  constructor(private http: HttpClient) { 
    this.url = "http://localhost:3004/students";
    this.student = new Student();
    this.studentArr = [];
  }

  insertStudent(student: Student){
    alert(student.id);
    this.http.post<Student>(this.url,student).subscribe();
    return "Student Details Added"
  }
  deleteStudent(studentId:number){
    this.http.delete<Student>(this.url+"/"+studentId).subscribe();
    return "Student Details Deleted"
  }
  updateStudent(student:Student){
    this.http.put<Student>(this.url+"/"+student.id,student).subscribe();
    return "Student Details Updated";
  }
  findStudent(studentId:number){
    this.http.get<Student>(this.url+"/"+studentId).subscribe(data=> this.student=data); 
    return this.student;
  }

  findAllStudent(){
    this.http.get<Student[]>(this.url).subscribe(data=> this.studentArr=data); 
    return this.studentArr;
  }

}
