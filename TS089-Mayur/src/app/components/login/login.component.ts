import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { login } from '../store/actions/auth.actions';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';
import { from } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports:[CommonModule,FormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email: string ='';
  password: string ='';

  constructor(private store: Store,private router:Router) {
    
  }


  onLogin() {
    this.store.dispatch(login({ email: this.email, password: this.password }));
    this.router.navigate(['dashboard'])
  }
}
