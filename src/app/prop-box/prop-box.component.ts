import { Component } from '@angular/core';
import { RecordsService } from "../records.service";
@Component({
  selector: 'app-prop-box',
  templateUrl: './prop-box.component.html',
  styleUrls: ['./prop-box.component.css'],
  providers: [RecordsService]
})
export class PropBoxComponent {

  infoReceive1: string[] = [];
  infoReceive2: string[] = [];
  infoReceive3: string[] = [];

  constructor(private rservice: RecordsService) {

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
  ngOnInit(): void {

  }
}
