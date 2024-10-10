import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';


import {MatSidenavModule} from '@angular/material/sidenav';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import { UsuariosModule } from './usuarios/usuarios.module';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  declarations: [DashboardComponent],
  imports: [CommonModule, 
    BrowserAnimationsModule,
    DashboardRoutingModule, 
    MatSidenavModule, 
    MatButtonModule, 
    MatToolbarModule,
    MatIconModule,
    UsuariosModule,
    SharedModule,
  ],
  exports: [DashboardComponent],
})
export class DashboardModule { }
