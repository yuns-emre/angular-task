import { Component, EventEmitter, inject, Output } from '@angular/core';
import { SearchComponent } from "../../molecules/search/search.component";
import { AtomBtnWithIconComponent } from "../../atoms/atom-btn-with-icon/atom-btn-with-icon.component";
import {
  MatDialog,
} from '@angular/material/dialog';
import { NewLinkModalComponent } from '../new-link-modal/new-link-modal.component';

@Component({
  selector: 'app-table-header',
  standalone: true,
  templateUrl: './table-header.component.html',
  styleUrl: './table-header.component.scss',
  imports: [SearchComponent, AtomBtnWithIconComponent],
})
export class TableHeaderComponent {
  @Output() callbackhome = new EventEmitter();
  readonly dialog = inject(MatDialog);

  constructor(
  ) { }

  newLink() {
    console.log("new link");
    this.dialog.open(NewLinkModalComponent);
  }

  callback(args: any) {
    this.callbackhome.emit(args);
  }
}
