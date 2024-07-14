import { CommonModule } from '@angular/common';
import {FormBuilder, FormGroup,Validators, FormsModule, NgForm, ReactiveFormsModule } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { StudentService } from '../../services/student.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-student',
  standalone: true,
  imports: [FormsModule,CommonModule,ReactiveFormsModule,HttpClientModule],
  providers:[StudentService],
  templateUrl: './add-student.component.html',
  styleUrl: './add-student.component.css'
})
export class AddStudentComponent  {
  submitted:boolean = false;
  stdForm: FormGroup;
  constructor(private formBuilder:FormBuilder,
              private router:Router,
              private studentService:StudentService
  ){
    this.stdForm = this.formBuilder.group({
      name: ['', Validators.required],
      age: ['', Validators.required],
      city: ['', Validators.required]
    });
  }
  student = {name:'',age:'',city:''};
  
  HandleForm = (form:NgForm) =>{
    this.submitted = true;
    window.alert('Data Submited');
    this.studentService.AddStudent(form.value).subscribe(
      ()=>{
        this.router.navigate(['/home']);
      }
    )
  }

  HandleForm2(){
    this.submitted = true;
    alert(this.stdForm.value.name);
  }
}
