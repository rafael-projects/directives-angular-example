import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[dirMarkText]'
})
export class MarkTextDirective implements OnInit{
  @Input() colorBack = 'gray';
  @Input() colorText = 'black';

  constructor(private element: ElementRef) { }

  ngOnInit(){
      this.changeColor();
  }

  private changeColor(cor: string = 'gray'){
    this.element.nativeElement.style.background = this.colorBack || cor;
    this.element.nativeElement.style.color = this.colorText;
    this.element.nativeElement.style.fontWeigth = 'bold';
  }

}
