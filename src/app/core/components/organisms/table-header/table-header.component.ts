import { Component, EventEmitter, inject, Output } from '@angular/core';
import { SearchComponent } from "../../molecules/search/search.component";
import { AtomBtnWithIconComponent } from "../../atoms/atom-btn-with-icon/atom-btn-with-icon.component";
import {
  MatDialog,
} from '@angular/material/dialog';
import { NewLinkModalComponent } from '../new-link-modal/new-link-modal.component';
import { DataService } from '../../../services/data.service';

@Component({
  selector: 'app-table-header',
  standalone: true,
  templateUrl: './table-header.component.html',
  styleUrl: './table-header.component.scss',
  imports: [SearchComponent, AtomBtnWithIconComponent],
})
export class TableHeaderComponent {
  @Output() callbackhome = new EventEmitter();
  @Output() addNewLink = new EventEmitter();

  constructor(
    private dialog: MatDialog,
    private dataService: DataService,
  ) { }

  newLink() {
    const dialogRef = this.dialog.open(NewLinkModalComponent);

    dialogRef.afterClosed().subscribe((result) => {
      if (result.success && result.isEdit == false) {
        this.dataService.addNewLink(result.data);
        this.addNewLink.emit();
      }
    });

  }

  callback(args: any) {
    this.callbackhome.emit(args);
  }
}
