import { ChangeDetectorRef, Component, inject, OnInit } from '@angular/core';
import { DataService } from '../../../services/data.service';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ButtonComponent } from '../../atoms/button/button.component';
import { CommonModule } from '@angular/common';
import { TextBtnComponent } from '../../atoms/link/link.component';
import { FormGroupComponent } from "../../molecules/form-group/form-group.component";
import { MAT_DIALOG_DATA, MatDialog, MatDialogClose, MatDialogRef } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { SocialMediaLinkValidatorDirective } from '../../../directives/social-media-link-validator.directive';

@Component({
  selector: 'app-new-link-modal',
  standalone: true,
  imports: [
    ButtonComponent,
    CommonModule,
    ReactiveFormsModule,
    TextBtnComponent,
    FormGroupComponent,
    MatDialogClose,
    MatButtonModule,
    MatIconModule,
    SocialMediaLinkValidatorDirective,
  ],
  templateUrl: './new-link-modal.component.html',
  styleUrl: './new-link-modal.component.scss',
})
export class NewLinkModalComponent {
  newLinkForm: FormGroup;
  data = inject(MAT_DIALOG_DATA);
  isUpdateForm: boolean = false;

  constructor(
    private dataService: DataService,
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<NewLinkModalComponent>,
    private cdr: ChangeDetectorRef,
  ) {
    if (this.data == undefined || this.data == null) {
      this.newLinkForm = this.fb.group({
        link: ['', [Validators.required,]],
        name: ['', Validators.required],
        desc: ['', Validators.required]
      });
    } else {
      this.newLinkForm = this.fb.group({
        link: [this.data.link.link, [Validators.required,]],
        name: [this.data.link.name, Validators.required],
        desc: [this.data.link.desc, Validators.required]
      });
      this.isUpdateForm = true;
    }
    this.onFormChanges();
  }

  onFormChanges() {
    this.newLinkForm.valueChanges.subscribe(() => {
      this.cdr.detectChanges();
    });
  }

  onSubmit() {
    if (this.isUpdateForm) {
      this.dialogRef.close({
        success: true,
        data: this.newLinkForm.value,
      });
    } else {
      console.log(this.newLinkForm.value);
      const res = this.dataService.addNewLink(this.newLinkForm.value);
      console.log(res.message);
      this.dialogRef.close();
    }
  }

  cancel() {
    console.log("cancel");
    this.dialogRef.close({
      success: false,
      data: {},
    });
  }
}
