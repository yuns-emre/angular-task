import { Component } from '@angular/core';
import { TableRowNumberComponent } from "../../molecules/table-row-number/table-row-number.component";
import { AtomPaginationComponent } from "../../atoms/atom-pagination/atom-pagination.component";

@Component({
  selector: 'app-table-footer',
  standalone: true,
  templateUrl: './table-footer.component.html',
  styleUrl: './table-footer.component.scss',
  imports: [TableRowNumberComponent, AtomPaginationComponent],
})
export class TableFooterComponent {

}
