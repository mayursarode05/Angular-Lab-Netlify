import { CommonModule, DatePipe } from '@angular/common';
import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, ChangeDetectionStrategy, Component, DoCheck, inject, Input, NgModule, OnChanges, OnDestroy, OnInit, SimpleChanges, ViewEncapsulation} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { StudentData, StudentService } from '../services/student.service';
import { RouterLink, RouterOutlet } from '@angular/router';
import { AddStudentComponent } from './add-student/add-student.component';
import { EditStudentComponent } from './edit-student/edit-student.component';



@Component({
  selector: 'app-home',
  standalone: true,
  imports: [FormsModule,RouterOutlet,EditStudentComponent,AddStudentComponent,RouterLink,CommonModule,HttpClientModule],
  providers:[StudentService], // Component class level injection
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  // Implement change detection strategies like OnPush to minimize unnecessary re-renders.
  changeDetection:ChangeDetectionStrategy.OnPush   
})
export class HomeComponent implements OnInit{
  dataURL:string = 'http://localhost:3000/0';
  students:StudentData[] = [];
  isLogIn:boolean = false;
 
  //  FOr Content projection
  parentMessage: string = 'Hello from the Parent Component!';
  changeMessage() {
    this.parentMessage = 'Message from Parent Component has changed!';
  }
  responseData: any;

  constructor(private service:StudentService,private http:HttpClient){
  
  }

  ngOnInit(): void {
    this.FetchData();
  }
  
  FetchData(){
    this.service.GetAllData().subscribe((data) =>{
      console.log(data)
      this.students = data
    })
  }

  HandleDelete = (id:string):void =>{
    this.service.deteteData(id).subscribe(
      ()=>{
        alert('Data Deleted Successfull.');
        this.FetchData();
      }
    );
  }

  HandleEditData = (id:string) => {
    
  }

// interceptor
  getData() {
    this.http.get('https://jsonplaceholder.typicode.com/posts/1').subscribe(response => {
      this.responseData = response;
    });
  }

  HandleClick = () =>{
    this.isLogIn = true;
  }
}
