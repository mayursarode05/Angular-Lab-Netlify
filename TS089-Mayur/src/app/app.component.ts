import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink, RouterOutlet } from '@angular/router';
import { TextColorDirective } from './components/Directives/text-color.directive';
import { UnlessDirective } from './components/Directives/unless.directive';
import { AnimationComponent } from './components/animation/animation.component';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,AnimationComponent,RouterLink,CommonModule,FormsModule,TextColorDirective,UnlessDirective],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'TS089-Mayur';
  condition = false;

  constructor(){
     }


}
