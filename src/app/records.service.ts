import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class navComponent {
  navItems: any = {
    0: { text: "HOME", link: "home" },
    1: { text: "PROPERTY", link: "property" }
  }

  getNavbar = () => {
    return this.navItems
  }
}
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

export class personData {
  persons: any = {
    0: { name: 'A', email: 'name1@gmail.com' },
    1: { name: 'B', email: 'name2@gmail.com' },
    2: { name: 'C', email: 'name3@gmail.com' }
  }
  getInfoPerson = () => {
    return this.persons
  }
}