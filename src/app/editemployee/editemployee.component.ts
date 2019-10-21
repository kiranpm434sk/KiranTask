import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EmpdataService } from '../empdata.service';
import { Employees } from '../employeedisplay/employee';

@Component({
  selector: 'app-editemployee',
  templateUrl: './editemployee.component.html',
  styleUrls: ['./editemployee.component.css']
})
export class EditemployeeComponent implements OnInit {

  id: number;
    name: string;
    description: string ;

    req;

    constructor(
      private _act: ActivatedRoute,
      private _data: EmpdataService,
      private _router:Router
    ) {}

    ngOnInit() {
      this.id = this._act.snapshot.params["Id"];

      this._data.getAllEmployees().subscribe(
        (data: Employees[]) => {
          this.id =data[0].id;
          this.name=data[0].name;
          this.description=data[0].description;

      });

    }
    onEditEmp(f){
      var req={
        Id:this.id,
        name:f.value.name,
        description:f.value.description
      }
      this._data.editEmployees(req).subscribe(
          (data:any)=>{
            alert('updated successfully');

            this._router.navigate(['']);
          }
        );
    }


}



// if(this.req==1){
//   alert('updated');

// }
// else{
//   alert('Not Updated');
// }
