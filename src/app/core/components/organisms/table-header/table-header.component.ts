import { Component } from '@angular/core';
import { SearchComponent } from "../../molecules/search/search.component";
import { AtomBtnWithIconComponent } from "../../atoms/atom-btn-with-icon/atom-btn-with-icon.component";

@Component({
  selector: 'app-table-header',
  standalone: true,
  templateUrl: './table-header.component.html',
  styleUrl: './table-header.component.scss',
  imports: [SearchComponent, AtomBtnWithIconComponent],
})
export class TableHeaderComponent {
  constructor() { }

  newLink() {
    console.log("new link");
  }
}
