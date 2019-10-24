import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EmployeedisplayComponent } from './employeedisplay/employeedisplay.component';
import { HttpClientModule } from "@angular/common/http";
import { RouterModule,Router } from '@angular/router';
import { AddemployeeComponent } from './addemployee/addemployee.component';
import { EditemployeeComponent } from './editemployee/editemployee.component';
import {ConfirmDialogModule} from 'primeng/confirmdialog';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {NgbPaginationModule, NgbAlertModule} from '@ng-bootstrap/ng-bootstrap';
import { EmpComponent } from './emp/emp.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {ConfirmationService, MessageService} from 'primeng/api';
import {NgxPaginationModule} from 'ngx-pagination';
import { Menu1Component } from './menu1/menu1.component';
import {SidebarModule} from 'primeng/sidebar';
import { SidebarComponent } from './sidebar/sidebar.component';
import { routing } from './app.routing';

import {TableModule} from 'primeng/table';
import {ToastModule} from 'primeng/toast';
import {ContextMenuModule} from 'primeng/contextmenu';
import {DialogModule} from 'primeng/dialog';
import { PrimengcompComponent } from './primengcomp/primengcomp.component';
import { TreeTableContextMenuDemoComponent } from './tree-table-context-menu-demo/tree-table-context-menu-demo.component';

import { TreeTableModule } from 'primeng/primeng';
import { HttpModule } from '@angular/http';
import { NodeService } from './node.service';
@NgModule({
  declarations: [
    AppComponent,
    EmployeedisplayComponent,
    AddemployeeComponent,
    EditemployeeComponent,
    // PopupComponent,
    EmpComponent,
    Menu1Component,
    SidebarComponent,
    PrimengcompComponent,
    TreeTableContextMenuDemoComponent




    ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([]),

    NgbModule,
    NgbPaginationModule,
    NgbAlertModule,
    ConfirmDialogModule,
    BrowserAnimationsModule,
    NgxPaginationModule,
    SidebarModule,
    routing,
    TableModule,
    ToastModule,
    ContextMenuModule,
    DialogModule,
    ReactiveFormsModule,
    TreeTableModule,
    HttpModule

    // PaginatorModule




  ],
  providers: [ConfirmationService, MessageService,NodeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
