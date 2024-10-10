import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';




@Component({
  selector: 'app-usuarios-dialog',
  templateUrl: './usuarios-dialog.component.html',
  styles: ``
})
export class UsuariosDialogComponent {
  userForm: FormGroup;


constructor(private matDialogRef: MatDialogRef<UsuariosDialogComponent>, private formBuilder: FormBuilder) {
    this.userForm = this.formBuilder.group({
      firstName: [null, [Validators.required]],
      lastName: [null, [Validators.required]],
      email: [null, [Validators.required]],
    })
  }

  onSave(): void {
    if (this.userForm.invalid) {
      this.userForm.markAllAsTouched();
    } else {
      this.matDialogRef.close({
        ...this.userForm.value,
      id: generateRandomString(5),
      createdAt: new Date(),
      });
    }



  }
}
