import { Component } from '@angular/core';
import { DashboardLayoutComponent } from "../../core/components/templates/dashboard-layout/dashboard-layout.component";
import { DataTableComponent } from "../../core/components/organisms/data-table/data-table.component";
import { TableHeaderComponent } from "../../core/components/organisms/table-header/table-header.component";
import { TableFooterComponent } from "../../core/components/organisms/table-footer/table-footer.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [DashboardLayoutComponent, DataTableComponent, TableHeaderComponent, TableFooterComponent],
  template: `
    <div class="main-box">
      <app-dashboard-layout>
        <app-table-header></app-table-header>    
        <app-data-table></app-data-table>
        <app-table-footer></app-table-footer>
      </app-dashboard-layout>
    </div>
  `,
  styles: ``
})
export class HomeComponent {

}
