import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { Sort, MatSortModule } from '@angular/material/sort';
import { DeleteDialogComponent } from '../delete-dialog/delete-dialog.component';
import { NewLinkModalComponent } from '../new-link-modal/new-link-modal.component';
import { CapitalizePipe } from '../../../pipe/capitalize.pipe';
import { SocialMediaLinkModel } from '../../../models/social-media-link';

@Component({
  selector: 'app-data-table',
  standalone: true,
  imports: [
    CommonModule,
    MatSortModule,
    MatButtonModule,
    MatIconModule,
    MatDialogModule,
    CapitalizePipe
  ],
  templateUrl: './data-table.component.html',
  styleUrl: './data-table.component.scss',
})
export class DataTableComponent implements OnInit {
  @Input() titles: string[] = [];
  @Input() tableData: any[] = [];
  @Input() className: string = "";
  @Output() callback = new EventEmitter<{ message: "edit" | "delete" | "reupload", data: {} }>

  emptyData: any[] = [];
  sortedData: any[] = [];

  constructor(private dialog: MatDialog) {
  }

  ngOnInit(): void {
    this.sortedData = this.tableData;
    this.emptyData = Array(10 - this.sortedData.length).fill(null);
  }

  sortData(sort: Sort) {
    const data = this.tableData.slice();
    if (!sort.active || sort.direction === '') {
      this.sortedData = data;
      return;
    }

    this.sortedData = data.sort((a, b) => {
      const isAsc = sort.direction === 'asc';
      switch (sort.active) {
        case this.titles[0]:
          return compare(a.name, b.name, isAsc);
        case this.titles[1]:
          return compare(a.link, b.link, isAsc);
        case this.titles[2]:
          return compare(a.desc, b.desc, isAsc);
        default:
          return 0;
      }
    });
  }

  edit(value: SocialMediaLinkModel) {
    const dialogRef = this.dialog.open(NewLinkModalComponent, {
      data: value,
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result.success == true) {
        value.link = result.data.link;
        value.desc = result.data.desc;
        value.name = result.data.name;

        this.callback.emit({ message: "edit", data: result.data });
      }
    });
  }

  remove(value: SocialMediaLinkModel) {
    const dialogRef = this.dialog.open(DeleteDialogComponent, {
      data: {
        text: value.name,
      },
      height: '220px',
      width: '400px',
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result == true) {
        this.callback.emit({ message: "delete", data: value })
      }
    });
  }
}

function compare(a: number | string, b: number | string, isAsc: boolean) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}

