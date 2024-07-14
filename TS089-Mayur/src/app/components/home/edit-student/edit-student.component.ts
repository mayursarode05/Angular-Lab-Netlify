import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, NgForm, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { StudentService } from '../../services/student.service';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-edit-student',
  standalone: true,
  imports: [FormsModule,HttpClientModule,ReactiveFormsModule,CommonModule],
  providers:[StudentService],
  templateUrl: './edit-student.component.html',
  styleUrl: './edit-student.component.css'
})
export class EditStudentComponent implements OnInit{

  // FOr content projection
  @Input() message: string ='';


  studentId:string|null = '';
  stdForm:FormGroup;
  constructor(private route:ActivatedRoute,
              private stdService:StudentService,
              private formBuilder:FormBuilder,
              private router:Router
            ){
            this.stdForm = this.formBuilder.group({
              name:['',Validators.required],
              id:['',Validators.required],
              city:['',Validators.required]
            })
  }

  ngOnInit(): void {
    this.studentId = this.route.snapshot.paramMap.get('id');
    if(this.studentId){
      this.stdService.GetByID(this.studentId).subscribe(
        (student)=>{
          this.stdForm.patchValue(student)
        }
      )
    }
  }

  HandleForm = () =>{
    this.stdService.UpdateStudent(this.stdForm.value,this.stdForm.value.id).subscribe(
      ()=>{
        alert('Data Updated');
        this.router.navigate(['/home'])
      }
    );
    
  }
}
