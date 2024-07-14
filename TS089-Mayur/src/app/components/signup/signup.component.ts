import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { signup } from '../store/actions/auth.actions';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports:[FormsModule,CommonModule],
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  name: string = '';
  email: string = '';
  password: string = '';

  constructor(private router:Router,private store: Store) {}

  onSignup() {
    this.store.dispatch(signup({ name: this.name, email: this.email, password: this.password }));
    this.router.navigate(['login']);
  }
}
