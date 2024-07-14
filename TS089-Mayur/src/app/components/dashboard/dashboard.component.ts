import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectUser } from '../store/selectors/auth.selectors';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports:[CommonModule,FormsModule],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  user$ = this.store.select(selectUser);

  constructor(private store: Store) {
    
  }
 
  ngOnInit(): void {
    this.user$ = this.store.select(selectUser);
  }
}
