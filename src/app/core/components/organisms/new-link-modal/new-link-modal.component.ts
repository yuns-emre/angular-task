import { ChangeDetectorRef, Component, inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ButtonComponent } from '../../atoms/button/button.component';
import { CommonModule } from '@angular/common';
import { TextBtnComponent } from '../../atoms/link/link.component';
import { FormGroupComponent } from "../../molecules/form-group/form-group.component";
import { MAT_DIALOG_DATA, MatDialog, MatDialogClose, MatDialogRef } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { SocialMediaLinkValidatorDirective } from '../../../directives/social-media-link-validator.directive';
import { SocialMediaLinkModel } from '../../../models/social-media-link';

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
  data: SocialMediaLinkModel = inject(MAT_DIALOG_DATA);
  isUpdateForm: boolean = false;

  constructor(
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
        link: [this.data.link, [Validators.required,]],
        name: [this.data.name, Validators.required],
        desc: [this.data.desc, Validators.required]
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
      //Edit Form
      this.data.link = this.newLinkForm.controls['link'].value;
      this.data.name = this.newLinkForm.controls['name'].value;
      this.data.desc = this.newLinkForm.controls['desc'].value;

      this.dialogRef.close({
        success: true,
        isEdit: this.isUpdateForm,
        data: this.data,
      });
    } else {
      //Add Form
      console.log({
        success: true,
        isEdit: this.isUpdateForm,
        data: this.newLinkForm.value,
      });
      this.dialogRef.close({
        success: true,
        isEdit: this.isUpdateForm,
        data: this.newLinkForm.value,
      });
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
