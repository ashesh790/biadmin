import { Component } from '@angular/core';
import { RecordsService, personData } from "../records.service";
@Component({
  selector: 'app-prop-box',
  templateUrl: './prop-box.component.html',
  styleUrls: ['./prop-box.component.css'],
  providers: [RecordsService, personData]
})
export class PropBoxComponent {

  infoReceive1: string[] = [];
  infoReceive2: string[] = [];
  infoReceive3: string[] = [];
  getInfoPerson1: { [key: string]: { name: string; email: string } } = {};
  constructor(private rservice: RecordsService, private pdata: personData) {

  }

  getInforFromServiceClass1() {
    this.infoReceive1 = this.rservice.getInfo1()
  }

  getInforFromServiceClass2() {
    this.infoReceive2 = this.rservice.getInfo2()
  }

  getInforFromServiceClass3() {
    this.infoReceive3 = this.rservice.getInfo3()
  }

  getPersonData() {
    this.getInfoPerson1 = this.pdata.getInfoPerson()
  }
  ngOnInit(): void {

  }
}
