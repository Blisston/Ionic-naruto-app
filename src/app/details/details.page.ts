import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
})
export class DetailsPage implements OnInit {
  arr ;
  current;
  flag = false;
  constructor(private router: ActivatedRoute, private http: HttpClient) {
    this.http.get('assets/characters.json').subscribe( (val) => {
      this.arr = val;
      console.log(this.current);
      setTimeout( () => {this.flag = true; } , 1000);
      });
   }
  ngOnInit() {
    this.current = +this.router.snapshot.paramMap.get('id');
    console.log(this.current);
  }

}
