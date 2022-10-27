import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[errorMsg]'
})

export class ErrorMsgDirective implements OnInit{

  htmlElement: ElementRef<HTMLElement>;
  _color: string = 'red';
  _message: string = 'Mandatory'
  
  @Input() set valid (value : boolean) {
    if(value){
      this.htmlElement.nativeElement.classList.add('hidden')
    }
    else{
      this.htmlElement.nativeElement.classList.remove('hidden')
    }
  }

  @Input() set color(value: string) {
    this._color = value
    this.setColor()
  }

  @Input() set message(value: string) {
    this._message = value
    this.setMessage()
  }

  constructor(private element: ElementRef<HTMLElement>) {
    this.htmlElement = element   
  }

  ngOnInit(): void {
    this.setStyle()
    this.setColor()
    this.setMessage()
  }

  setStyle() {
    this.htmlElement.nativeElement.classList.add('form-text')
  }

  setColor(){
    this.htmlElement.nativeElement.style.color = this._color;
  }

  setMessage(){
    this.htmlElement.nativeElement.innerText = this._message;
  }
}
