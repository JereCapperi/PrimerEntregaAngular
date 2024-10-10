import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { UsuariosDialogComponent } from './usuarios-dialog/usuarios-dialog.component';
import { Usuarios } from './models';



const ELEMENT_DATA: Usuarios[] = [
  {
    id: 'hgs2k', 
    firstname: 'Gonzalo', 
    lastname: 'Fernandez', 
    createdAt: new Date(),
    email: 'gonzafernandez@gmail.com'
  },
  {
    id: 'l3xct', 
    firstname: 'Lionel', 
    lastname: 'Gomez', 
    createdAt: new Date(),
    email: 'lionelgomez@gmail.com'
  },
  {
    id: 'oie56', 
    firstname: 'Esteban', 
    lastname: 'Brown', 
    createdAt: new Date(),
    email: 'estebanquito@gmail.com'
  },
  {
    id: 'hg93s', 
    firstname: 'Sebastian', 
    lastname: 'Boselli', 
    createdAt: new Date(),
    email: 'boselliseba78@gmail.com'
  }
];


@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrl: './usuarios.component.scss'
})
export class UsuariosComponent {


  displayedColumns: string[] = ['id', 'name', 'email', 'createdAt', 'actions'];
  dataSource = ELEMENT_DATA;



  constructor(private matDialog: MatDialog) {}


  openModal(): void {
    this.matDialog.open(UsuariosDialogComponent)
    .afterClosed()
    .subscribe({
      next: (result) => {
        console.log('RECIBIMOS:', result);


        if (!!result) {
          this.dataSource = [
            ...this.dataSource,
            {
              ...result,
            }
          ]
        }
      },
    });

  }
}
