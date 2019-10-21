import { Component, OnInit } from '@angular/core';
import { Employees } from './employee';
import { EmpdataService } from '../empdata.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-employeedisplay',
  templateUrl: './employeedisplay.component.html',
  styleUrls: ['./employeedisplay.component.css']
})
export class EmployeedisplayComponent implements OnInit {

id: number;
  arr: Employees[] = [];
  name: string ;
  description: string;

  loading:boolean=true;
  constructor(private _data: EmpdataService,private _router:Router) {}

  ngOnInit() {
    this._router.navigate(['']);
    // this.loading=true;
    this._data.getAllEmployees().subscribe(
      (data: Employees[]) => {
        this.arr = data;
        this.loading=false;
      },
      function(error) {
        alert(error);
      },
      function() {}
    );


  }

  onSaveEmp(f) {
    this._router.navigate(['/addemp']);
  }
  onEmpDelete(item: Employees) {
    this._data.deleteEmployees(item.id).subscribe((data: any) => {
      this.arr.splice(this.arr.indexOf(item), 1);
      alert('deleted');
    });
  }

}


