import { Directive, ElementRef, HostListener, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appTextColor]',
  standalone: true
})
export class TextColorDirective {

  constructor(private element:ElementRef,private render2:Renderer2) { }

  @Input('appTextColor') color:string = '';

  private changeColorText(color:string){
    this.render2.setStyle(this.element.nativeElement,'color',color)
  }

  @HostListener ('click') onClick(){
    this.changeColorText(this.color || 'black')
  }
}
