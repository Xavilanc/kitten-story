import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { Kitten } from '../models/kitten';

@Component({
  selector: 'app-create-kitten',
  templateUrl: './create-kitten.component.html',
  styleUrls: ['./create-kitten.component.css']
})
export class CreateKittenComponent implements OnInit {

  newKitten: Kitten = {
    name: '',
    race: '',
    dateOfBirth: new Date,
    photo: '',
  };

  @Output()
  sendKittenToParent: EventEmitter<Kitten> = new EventEmitter();

  @Output()
  sendKittenToAdopt: EventEmitter<Kitten> = new EventEmitter();

  CreateKitten(): void {
    this.sendKittenToParent.emit(this.newKitten);
    this.sendKittenToAdopt.emit(this.newKitten);
    this.newKitten = { name:"", race:"", dateOfBirth: new Date, photo:"",}
  }


  onSubmit() {

  }

  ngOnInit(): void {
  }

}
