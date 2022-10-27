import { Component, OnInit } from '@angular/core';

import { Kitten } from '../models/kitten';

@Component({
  selector: 'app-user-kitten',
  templateUrl: './user-kitten.component.html',
  styleUrls: ['./user-kitten.component.css']
})
export class UserKittenComponent implements OnInit {

  kittenAdoptList: Kitten[] = [];

  addKitten(kittenAdopt: Kitten) {
    this.kittenAdoptList.push(kittenAdopt);
    console.log(kittenAdopt)
  }

  constructor() { }

  ngOnInit(): void {
  }

}
