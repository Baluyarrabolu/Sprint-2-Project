import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl} from '@angular/forms'
import { ActivatedRoute } from '@angular/router';
import { Student } from 'src/app/modal/student';
import { StudentService } from 'src/app/service/student.service';


@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})

export class StudentComponent implements OnInit{

  studDetail !: FormGroup;
  studObj : Student = new Student();
  studList :Student[] = [];

  constructor(private formBuilder : FormBuilder, private studService : StudentService){ }
  
  ngOnInit(): void {

    this.getAllStudents();

    this.studDetail = this.formBuilder.group({
      id: [''],
      name: [''],
      email: [''],
      mobile: ['']
    });
    }

  addStudent() {
    console.log(this.studDetail);
    this.studObj.id = this.studDetail.value.id;
    this.studObj.name = this.studDetail.value.name;
    this.studObj.email = this.studDetail.value.email;
    this.studObj.mobile = this.studDetail.value.mobile;

    this.studService.addStudent(this.studObj).subscribe(res=>{
      console.log(res);
      this.getAllStudents();
    },err=>{
      console.log(err);
    });
  }

  getAllStudents()
  {
    this.studService.getAllStudents().subscribe(res=>{
      this.studList = res;
    },err=>{
      console.log("error while fetching data.")
    });
  }

  editStudent(stud : Student)
  {
    this.studDetail.controls['id'].setValue(stud.id);
    this.studDetail.controls['name'].setValue(stud.name);
    this.studDetail.controls['email'].setValue(stud.email);
    this.studDetail.controls['mobile'].setValue(stud.mobile);
   
  }

  updateStudent()
  {
    this.studObj.id = this.studDetail.value.id;
    this.studObj.name = this.studDetail.value.name;
    this.studObj.email = this.studDetail.value.email;
    this.studObj.mobile = this.studDetail.value.mobile;

    this.studService.updateStudent(this.studObj).subscribe(res=>{
      console.log(res);
      this.getAllStudents();
    },err=>{
      console.log(err);
    })
  }

  deleteStudent(stud : Student) {

    this.studService.deleteStudent(stud).subscribe(res => {
      console.log(res);
      alert('Student details deleted successfully...');
      this.getAllStudents();
    },err => {
      console.log(err);
    });
  }
} 

