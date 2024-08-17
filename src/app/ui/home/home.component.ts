import { Component, OnInit } from '@angular/core';
import { DashboardLayoutComponent } from "../../core/components/templates/dashboard-layout/dashboard-layout.component";
import { DataTableComponent } from "../../core/components/organisms/data-table/data-table.component";
import { TableHeaderComponent } from "../../core/components/organisms/table-header/table-header.component";
import { TableFooterComponent } from "../../core/components/organisms/table-footer/table-footer.component";
import { DataService } from '../../core/services/data.service';
import { SocialMediaLinkModel } from '../../core/models/social-media-link';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [DashboardLayoutComponent, DataTableComponent, TableHeaderComponent, TableFooterComponent],
  template: `
    <div class="main-box">
      <app-dashboard-layout>
        <app-table-header (callbackhome)="callback($event)"></app-table-header>    
        <app-data-table [tableData]="filterdata" [className]="'social-media-table'" [titles]="tableTitles"></app-data-table>
        <app-table-footer [tableData]="filterdata" ></app-table-footer>
      </app-dashboard-layout>
    </div>
  `,
  styles: ``
})
export class HomeComponent implements OnInit {

  socialMediaLinks: SocialMediaLinkModel[] = [];
  filterdata: any[] = [];
  tableTitles: string[] = [
    'Sosyal Medya Linki',
    'Sosyal Medya Adı',
    'Açıklama',
  ];

  constructor(private dataService: DataService) {

  }

  ngOnInit(): void {
    this.getAlLSocialMediaLinks();
  }

  private getAlLSocialMediaLinks() {
    const value = this.dataService.getAllSocialMediaLinks();

    if (value?.socialMedia != undefined) {
      this.socialMediaLinks = value.socialMedia;
      this.filterdata = this.socialMediaLinks;
    }
  }

  callback(args: any) {
    console.log("filterdata:", args);
    this.filterdata = this.socialMediaLinks.filter(item => item.name.toLocaleLowerCase().includes(args.toLocaleLowerCase()) == true);
    console.log("filterdata:", this.filterdata);
  }
}
