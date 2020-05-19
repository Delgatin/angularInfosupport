import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HighLighterService {

  constructor() { }

  next(data: any[]) {
    for (let index = 0; index < data.length; index++) {
      if (data[index].highlight) {
        delete data[index].highlight;
        if (index + 1 >= data.length) {
          data[0].highlight = true;
        } else {
          data[index + 1].highlight = true;
        }
        return;
      }
    }
    data[0].highlight = true;
  }

  previous(data: any[]) {
    for (let index = 0; index < data.length; index++) {
      if (data[index].highlight) {
        delete data[index].highlight;
        if (index - 1 < 0) {
          data[data.length - 1].highlight = true;
        } else {
          data[index - 1].highlight = true;
        }
        return;
      }
    }
    data[data.length - 1].highlight = true;
  }
}
