import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styles: []
})
export class AddComponent implements OnInit {
  
  newMessage: string = 'One random string'
  newColor: string ='red'

  myForm: FormGroup = this.fb.group({
    name: ['', Validators.required]
  })


  constructor( private fb: FormBuilder) { }

  ngOnInit(): void {
  }

  hasError(field: string): boolean {
    return this.myForm.get(field)?.invalid || false
  }
  changeName() {
    this.newMessage = Math.random().toString()
  }
  changeColor(){
    const color = "#xxxxxx".replace(/x/g, y=>(Math.random()*16|0).toString(16));
    this.newColor = color
  }

}
