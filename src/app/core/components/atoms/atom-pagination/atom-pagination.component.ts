import { Component, Input } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-atom-pagination',
  standalone: true,
  imports: [
    MatIconModule
  ],
  template: `
    <div class="pagination-container">
      <button [disabled]="currentPage == 1" class="back-btn" (click)="back()"><mat-icon fontIcon="arrow_back_ios"></mat-icon> </button>
      <span class="current-page">{{currentPage}}</span>
      <span class="text-of">of</span>
      <span class="total-page">{{totalPage}}</span>
      <button [disabled]="currentPage == totalPage" class="next-btn" (click)="next()"><mat-icon fontIcon="arrow_forward_ios"></mat-icon></button>
    </div>
  `,
  styles: `
    .pagination-container{
      display: flex;
      align-items: center;
      gap: 6px;

      .current-page{
        padding: 5px 12px;
        background: white;
        border: 1px solid rgba(234, 234, 234, 1);
        border-radius: 4px;
        font-size: 16px;
        font-weight: 500;
      }

      span.text-of {
        color: rgba(201, 201, 201, 1);
        font-size: 14px;
        font-weight: 500;
      }

      span.total-page {
        font-size: 16px;
        font-weight: 500;
        color: rgba(116, 75, 252, 1);
      }

      button{
        background: none;
        border: none;
        color:rgba(116, 75, 252, 1);
      }

      button:disabled{
        color:rgba(201, 201, 201, 1) !important;
      }
    }
  `
})
export class AtomPaginationComponent {
  @Input() currentPage: number = 1;
  @Input() totalPage: number = 4;

  back() {
    if (this.currentPage != 1) {
      this.currentPage -= 1;
    }
  }

  next() {
    if (this.totalPage != this.currentPage) {
      this.currentPage += 1;
    }
  }
}
