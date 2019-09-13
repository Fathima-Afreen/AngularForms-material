import { Component, OnInit } from '@angular/core';
	
import {FormBuilder,FormGroup,Validators} from '@angular/forms'
@Component({
  selector: 'app-reactiveform',
  templateUrl: './reactiveform.component.html',
  styleUrls: ['./reactiveform.component.scss']
})
export class ReactiveformComponent implements OnInit {
 form: FormGroup;;
 submitted = false;
  success = false;

  constructor(private formBuilder: FormBuilder) {
   this.form = formBuilder.group({
     firstname: ['', Validators.required],
     lastname: ['', Validators.required],
     email: ['', [Validators.required, Validators.email]],
     message: ['', Validators.required],
 
   });
   }

  ngOnInit() {
  }
  submit() {
    this.submitted = true;

    if (this.form.invalid) {
        return;
    }

    this.success = true;

}
}