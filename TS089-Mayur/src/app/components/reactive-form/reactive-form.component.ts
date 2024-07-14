import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatSlideToggleModule } from  '@angular/material/slide-toggle';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatRadioModule } from '@angular/material/radio';
import { MatButtonModule } from '@angular/material/button';
import { ReactiveFormsModule } from '@angular/forms';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { dateInPast } from '../validators/date.validator';

@Component({
  selector: 'app-reactive-form',
  standalone: true,
  imports: [CommonModule,MatRadioModule,MatButtonModule,MatNativeDateModule,MatDatepickerModule,MatSelectModule,MatInputModule,MatSlideToggleModule,ReactiveFormsModule],
  templateUrl: './reactive-form.component.html',
  styleUrl: './reactive-form.component.css'
})
export class ReactiveFormComponent {
  userForm: FormGroup;
  countries = ['USA', 'Canada', 'UK', 'Australia'];
  genders = ['Male', 'Female', 'Other'];
  isFormSubmit:boolean = false;
  constructor(private fb: FormBuilder) {
    this.userForm = this.fb.group({
      userName: ['', [Validators.required,Validators.minLength(4)]],
      userCountry: ['', Validators.required],
      birthdate: ['', [Validators.required,dateInPast]],
      gender: ['', Validators.required]
    });
  }



  onSubmit() {
    if (this.userForm.valid) {
      this.isFormSubmit = true;
      console.log(this.userForm.value);
    }
  }
}
