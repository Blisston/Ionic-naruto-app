import { Component, OnInit } from '@angular/core';
import {DataService} from '../data.service';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-favourite',
  templateUrl: './favourite.page.html',
  styleUrls: ['./favourite.page.scss'],
})
export class FavouritePage implements OnInit {

  fav = [];
  arr;
  constructor(private data: DataService, private http: HttpClient) {
    this.http.get('assets/characters.json').subscribe( (val) => {
      this.arr = val;
      });
    this.fav = this.data.getElements();
    this.data.dataChanges.subscribe((dat) => {
      this.fav = dat;
      console.log(this.fav);
    });
  }

  ngOnInit() {
  }
  contains(i) {
    if (this.fav.indexOf(i) === -1) {
      return false;
    } else {
      return true;
    }
  }
}
