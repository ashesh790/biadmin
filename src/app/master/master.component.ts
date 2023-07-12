import { Component } from '@angular/core';
import { navComponent } from "../records.service"
@Component({
  selector: 'app-master',
  templateUrl: './master.component.html',
  styleUrls: ['./master.component.css'],
  providers: [navComponent]
})
export class MasterComponent {
  getNavItemsName: { [key: string]: { text: string; link: string } } = {};

  constructor(private navItems: navComponent) {

  }

  getNavItems() {
    this.getNavItemsName = this.navItems.getNavbar()
  }
  ngOnInit(): void {
    this.getNavItems();
  }
} 