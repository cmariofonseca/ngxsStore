import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Store } from '@ngxs/store';
import { AddUser } from 'src/app/actions/user.action';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})

export class CreateComponent implements OnInit {

  formGroup: FormGroup;

  constructor(private fb: FormBuilder, private store: Store) {
    this.createForm();
  }

  ngOnInit(): void {
  }

  createForm(): void {
    this.formGroup = this.fb.group({
      name: ['', Validators.required],
      email: ['', Validators.required]
    });
  }

  addUser(name: string, email: string): void {
    this.store.dispatch(new AddUser({name, email}));
  }

}
