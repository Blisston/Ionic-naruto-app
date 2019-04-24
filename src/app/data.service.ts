import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { EventEmitter } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class DataService {
  favx = [];
  dataChanges = new EventEmitter();
  constructor(private storage: Storage) {}
  addElement(data) {
    console.log(this.favx);
    this.favx.push(data);
    this.storage.set('fav', JSON.stringify(this.favx));
  }
  getElements() {
    this.storage.get('fav').then(val => {
      if (val === null) {
        this.favx = [];
      } else {
        this.favx = JSON.parse(val);
        this.dataChanged();
      }
    }, (ful) => {
      
    }
    );
    return this.favx.slice();
  }
  dataChanged() {
    this.getElements();
    this.dataChanges.emit(this.favx);
  }
}
