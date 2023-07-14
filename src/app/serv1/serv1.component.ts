import { Component } from '@angular/core';
import { inforReceive } from "../records.service";
@Component({
  selector: 'app-serv1',
  templateUrl: './serv1.component.html',
  styleUrls: ['./serv1.component.css'],
  providers: [inforReceive]
})
export class Serv1Component {
  constructor(private empInfo: inforReceive) { }

  inforReceive1: string[] = []
  inforReceive2: string[] = []
  inforReceive3: string[] = []

  getInfo1 = () => {
    this.inforReceive1 = this.empInfo.get_info_1()
  }

  getInfo2 = () => {
    this.inforReceive2 = this.empInfo.get_info_2()
  }

  getInfo3 = () => {
    this.inforReceive3 = this.empInfo.get_info_3()
  }

  addInfoEmp = (frm: { value: { location: string; }; }) => {
    this.empInfo.addInfo(frm.value.location)
  }

}
