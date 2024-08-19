import { Component, inject } from '@angular/core';
import { ButtonComponent } from "../../atoms/button/button.component";
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-delete-dialog',
  standalone: true,
  imports: [ButtonComponent],
  template: `
    <div class="delete-dialog-container">
        <p> <span style="color: blueviolet;">{{data.text}}</span> datasını silmek istediğinizden emin misiniz?</p>
        <div class="btn-container">
            <app-button label="İptal" [className]="'modal-cancel-btn'" (click)="cancel()"></app-button>
            <app-button label="Sil" [className]="'modal-save-btn'" (click)="onSubmit()"></app-button>
        </div>
    </div>
  `,
  styles: `
    .delete-dialog-container{
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: end;
      padding: 48px;

      .btn-container{
        display: flex;
        gap: 16px;
      }
    }
  `
})
export class DeleteDialogComponent {
  data = inject(MAT_DIALOG_DATA);

  constructor(
    private dialogRef: MatDialogRef<DeleteDialogComponent>,
  ) {
  }

  cancel() {
    this.dialogRef.close(false);
  }

  onSubmit() {
    this.dialogRef.close(true);
  }
}
