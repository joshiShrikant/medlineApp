import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { MatDialogRef, MatDialog, MatSnackBar, MAT_DIALOG_DATA } from '@angular/material';
import { ConfirmDialogComponent } from '../confirm-dialog/confirm-dialog.component';

@Component({
  selector: 'app-formreactive',
  templateUrl: './formreactive.component.html',
  styleUrls: ['./formreactive.component.css']
})
export class FormreactiveComponent implements OnInit {
  form = new FormGroup({
    firstName: new FormControl('', Validators.required),
    lastName: new FormControl('', Validators.required),
    phone: new FormControl('', Validators.required),
    ext: new FormControl(''),
    email: new FormControl('', [
      Validators.required,
      Validators.email
    ]),    
   });
   constructor(private dialog: MatDialog,
    private snackBar: MatSnackBar) {
  }
  
    get firstname(){
      return this.form.get('firstName')
    }
    ngOnInit() {
    }
  
    openDialog(){
      let dialogRef = this.dialog.open(ConfirmDialogComponent, {
        width: '600px',
        data: this.form.value
      });
  
      dialogRef.afterClosed().subscribe(result => {
        console.log('The dialog was closed');
        // this.animal = result;
      });
    }
    onSubmit(){
      // debugger
      // alert(JSON.stringify(this.form.value));
      this.openDialog();
    }

}