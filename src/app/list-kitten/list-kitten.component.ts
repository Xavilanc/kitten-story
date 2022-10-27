import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import { Kitten } from '../models/kitten';

@Component({
  selector: 'app-list-kitten',
  templateUrl: './list-kitten.component.html',
  styleUrls: ['./list-kitten.component.css']
})
export class ListKittenComponent implements OnInit {

  kittenList: Kitten[] = [];

  // @Input() kittenAdopt: Kitten = {
  //   name: '',
  //   race: '',
  //   dateOfBirth: new Date,
  //   photo: '',
  // }

  @Output()
  sendKittenToAdopt: EventEmitter<Kitten> = new EventEmitter();

  

  addKitten(newKitten: Kitten) {
    this.kittenList.push(newKitten);
    console.log(this.kittenList)
  }

  AdoptKitten(i: number): void {
    this.sendKittenToAdopt.emit(this.kittenList[i]);
    this.kittenList.splice(i, 1)
  }

  constructor() { }

  ngOnInit(): void {
  }

}
