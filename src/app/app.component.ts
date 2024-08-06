import { Component } from '@angular/core';
import { Student } from './model/Student';
import { Studentservice } from './student.service';
import { Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  currentdate: Date = new Date();
  student: Student = new Student();
  result: string = "";
  studentArr: Student[] = [];
  flag: boolean = false;

  studentPA = new FormControl('', [
    Validators.required,
    Validators.pattern('some-pattern')
  ]);

  constructor(private service: Studentservice) {}

  insertStudent(data: any) {
    this.student.id = data.studentId;
    this.student.studentName = data.studentName;
    this.student.studentclg = data.studentclg;
    this.student.studentdept = data.studentdept;
    this.student.studentroomno = data.studentroomno;
    this.student.currentdate = data.currentdate;
    this.student.studentPA = data.studentPA;

    this.result = this.service.insertStudent(this.student);
  }

  updateStudent(data: any) {
    this.student.id = data.studentId;
    this.student.studentName = data.studentName;
    this.student.studentclg = data.studentclg;
    this.student.studentdept = data.studentdept;
    this.student.studentroomno = data.studentroomno;
    this.student.currentdate = data.currentdate;
    this.student.studentPA = data.studentPA;

    this.result = this.service.updateStudent(this.student);
  }

  deleteStudent(data: any) {
    this.result = this.service.deleteStudent(data.studentId);
  }

  findStudent(data: any) {
    this.student = this.service.findStudent(data.studentId);
    this.result = this.student.id+" "+this.student.studentName+" "+this.student.studentclg+" "+this.student.studentdept+" "+this.student.studentroomno+" "+this.student.currentdate+" "+this.student.studentPA;
  }

  findAllStudent() {
    this.studentArr = this.service.findAllStudent();
    this.flag = true;
  }
}
