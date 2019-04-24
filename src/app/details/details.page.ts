import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { DataService } from '../data.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
})
export class DetailsPage implements OnInit {
  arr: any = [];
  current;
  flag = false;
  fav = [];
  constructor(private router: ActivatedRoute, private http: HttpClient, private data: DataService) {
    this.http.get('assets/characters.json').subscribe( (val) => {
      this.arr = val;
      console.log(this.arr);
      this.current = this.arr.map(function(e) { return e.name; }).indexOf(this.current);
      setTimeout( () => {this.flag = true; } , 1000);
      });
      this.fav = this.data.getElements();
      this.data.dataChanges.subscribe((dat) => {
        this.fav = dat;

      });
   }
  ngOnInit() {
    this.current = this.router.snapshot.paramMap.get('id');
  }
  contain() {
    const i = this.current;
    if (this.fav.indexOf(i) === -1) {
      return false;
    } else {
      return true;
    }
  }
  addFav() {
    const i = this.current;
    console.log(i);
    this.data.addElement(i);
    this.data.dataChanged();
  }
}
