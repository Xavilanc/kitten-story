import { Component, OnInit } from '@angular/core';
import { Kitten } from '../models/kitten';

@Component({
  selector: 'app-list-kitten',
  templateUrl: './list-kitten.component.html',
  styleUrls: ['./list-kitten.component.css']
})
export class ListKittenComponent implements OnInit {

  kittenList: Kitten[] = [];

  addKitten(newKitten: Kitten) {
    this.kittenList.push(newKitten);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
