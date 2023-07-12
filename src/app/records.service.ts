import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RecordsService {
  info1: string[] = ["a", "1", "a@gmail.com"]
  info2: string[] = ["b", "2", "b@gmail.com"]
  info3: string[] = ["c", "3", "c@gmail.com"]

  getInfo1 = () => {
    return this.info1
  }

  getInfo2 = () => {
    return this.info2
  }

  getInfo3 = () => {
    return this.info3
  }
  constructor() { }
}
