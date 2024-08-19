import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { DashboardLayoutComponent } from "../../core/components/templates/dashboard-layout/dashboard-layout.component";
import { DataTableComponent } from "../../core/components/organisms/data-table/data-table.component";
import { TableHeaderComponent } from "../../core/components/organisms/table-header/table-header.component";
import { TableFooterComponent } from "../../core/components/organisms/table-footer/table-footer.component";
import { LoaderComponent } from '../../core/components/atoms/loader/loader.component';
import { DataService } from '../../core/services/data.service';
import { SocialMediaLinkModel } from '../../core/models/social-media-link';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, DashboardLayoutComponent, DataTableComponent, TableHeaderComponent, TableFooterComponent, LoaderComponent],
  template: `
    <div class="main-box">
      <app-dashboard-layout>
        <app-table-header (callbackhome)="callback($event)" (addNewLink)="getAllSocialMediaLinks()"></app-table-header>    
        <ng-container *ngIf="isLoading == false; else loading">
          <app-data-table [tableData]="filterdata" [className]="'social-media-table'" [titles]="tableTitles" (callback)="process($event)" ></app-data-table>
        </ng-container>

        <ng-template #loading>
          <app-loader></app-loader>
        </ng-template>
        <app-table-footer [tableData]="filterdata" ></app-table-footer>
      </app-dashboard-layout>
    </div>
  `,
  styles: `
    app-loader{
      height:100%
    }
  `
})
export class HomeComponent implements OnInit {
  socialMediaLinks: SocialMediaLinkModel[] = [];
  filterdata: any[] = [];
  tableTitles: string[] = [
    'Sosyal Medya Linki',
    'Sosyal Medya Adı',
    'Açıklama',
  ];

  isLoading: boolean = false;

  constructor(
    private dataService: DataService,
    private cdr: ChangeDetectorRef,
  ) {
  }

  ngOnInit(): void {
    this.getAllSocialMediaLinks();
  }

  process(args: any) {
    console.log("Process:", args);
    if (args.message == "edit") {
      this.editSocialLink(args.data);
    } else if (args.message == "delete") {
      this.removeSocialLink(args.data);
    } else {
      this.getAllSocialMediaLinks();
    }
  }

  async getAllSocialMediaLinks() {
    this.isLoading = true;
    this.socialMediaLinks = await this.dataService.getAllSocialMediaLinks();
    this.filterdata = this.socialMediaLinks;
    this.isLoading = false;
    this.cdr.detectChanges();
  }

  callback(args: any) {
    this.isLoading = true;
    console.log("filterdata:", args);
    this.filterdata = this.socialMediaLinks.filter(item =>
      item.name.toLocaleLowerCase().includes(args.toLocaleLowerCase()) == true
    );
    console.log("filterdata:", this.filterdata);
    setTimeout(() => {
      this.isLoading = false;
    }, 300);
    this.cdr.detectChanges();
  }

  async editSocialLink(data: SocialMediaLinkModel) {
    console.log("Data Edit Link:", data);
    await this.dataService.updateSocialMediaLink(data.id ?? '', data);
    await this.getAllSocialMediaLinks();
  }

  async removeSocialLink(data: SocialMediaLinkModel) {
    console.log("Data RemoveLink:", data);
    await this.dataService.deleteSocialMediaLink(data.id ?? '');
    await this.getAllSocialMediaLinks();
  }
}
