import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  arr ;
  temp;
  searchTerm = '';
  searchClan = '';
  searchVillage = '';
  filter = false;
  constructor(private http: HttpClient) {
    this.http.get('assets/characters.json').subscribe( (val) => {
    this.temp = val;
    this.arr = this.temp;
    });

  }
  filterItems() {
      this.arr = this.temp;
    this.arr = this.arr.filter(item => {
      return item.name.toLowerCase().indexOf(this.searchTerm.toLowerCase()) > -1;
    });
  }
  changeFilter() {
    this.filter = !this.filter;
  }
  filterClan() {
    this.arr = this.temp;
    this.arr = this.arr.filter(item => {
      return item.clan.toLowerCase().indexOf(this.searchClan.toLowerCase()) > -1;
    });
  }
  filterVillage() {
    this.arr = this.temp;
    this.arr = this.arr.filter(item => {
      return item.village.toLowerCase().indexOf(this.searchVillage.toLowerCase()) > -1;
    });
  }
}
