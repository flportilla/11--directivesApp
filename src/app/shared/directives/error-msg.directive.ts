import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[errorMsg]'
})

export class ErrorMsgDirective implements OnInit{

  htmlElement: ElementRef<HTMLElement>;
  @Input() color: string = 'red'
  @Input() message: string = 'This field cannot be empty'

  constructor( private element: ElementRef<HTMLElement>) { 
    this.htmlElement = element
  }
  
  ngOnInit(): void {
    this.setColor();
    this.setMessage();
  }
  
  setColor():void{
    this.htmlElement.nativeElement.style.color = this.color
    this.htmlElement.nativeElement.classList.add('form-text')
  }

  setMessage(){
    this.htmlElement.nativeElement.innerText = this.message
  }

}
