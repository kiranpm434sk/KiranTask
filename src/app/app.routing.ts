import { Routes,RouterModule} from "@angular/router";

import { AddemployeeComponent } from './addemployee/addemployee.component';
import { EditemployeeComponent } from './editemployee/editemployee.component';
import { EmpComponent } from './emp/emp.component';
import { Menu1Component } from './menu1/menu1.component';
import { PrimengcompComponent } from './primengcomp/primengcomp.component';

const arr : Routes=[
  // {path:'',component:Menu1Component},
  {path:'empdisp',component:EmpComponent},
  {path:'addemp',component:AddemployeeComponent},
  {path:'editemp',component:EditemployeeComponent},
  {path : 'primeng' , component : PrimengcompComponent}
  //{path:'',redirectTo:EmpComponent}


];

export const routing=RouterModule.forRoot(arr);



































// {path:'home',component:EmployeedisplayComponent},
  // // {path:'',component:SidebarComponent},
  // // {path:'',component:PopupComponent},
