import { animate, keyframes, state, style, transition, trigger } from '@angular/animations';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-animation',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './animation.component.html',
  styleUrl: './animation.component.css',
  animations : [
    trigger('fadeInOut', [
      state('void', style({ opacity: 0 })),
      transition(':enter, :leave', [
        animate(500)
      ])
    ]),
    trigger('slideInOut', [
      state('in', style({ transform: 'translateX(0)' })),
      state('out', style({ transform: 'translateX(-100%)' })),
      transition('in <=> out', [
        animate('0.5s ease-in-out')
      ])
    ]),
    trigger('keyframeAnimation', [
      transition('void => *', [
        animate('2s', keyframes([
          style({ opacity: 0, offset: 0 }),
          style({ opacity: 0.5, offset: 0.5 }),
          style({ opacity: 1, offset: 1.0 })
        ]))
      ])
    ])
  ]
})
export class AnimationComponent {
      isVisible : boolean = true;
      slideState ='in';
       
      
      toggleVisibility() {
        this.isVisible = !this.isVisible;
      }
    
      toggleSlide() {
        this.slideState = this.slideState === 'in' ? 'out' : 'in';
      }
}
