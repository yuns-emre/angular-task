import { Component, OnInit } from '@angular/core';
import { TextBtnComponent } from "../../atoms/link/link.component";
import { DataService } from '../../../services/data.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header-links',
  standalone: true,
  imports: [TextBtnComponent, CommonModule],
  template: `
    <ng-container *ngFor="let item of headerItems">
      <app-link [route]="item.link" [text]="item.title" className="link link-header">
      </app-link>
    </ng-container>
  `,
  styles: ``
})
export class HeaderLinksComponent implements OnInit {
  headerItems: any[] = [];

  constructor(
    private dataService: DataService,
  ) {
  }

  ngOnInit(): void {
    this.getAllHeaderItems();
  }

  getAllHeaderItems() {
    this.headerItems = this.dataService.getAllHeaderItems();
  }
}
