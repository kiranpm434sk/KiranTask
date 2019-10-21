import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/components/common/menuitem';
import { MessageService, ConfirmationService } from 'primeng/api';
import { EmpdataService } from '../empdata.service';
import { Employees } from '../employeedisplay/employee';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';

@Component({
  selector: 'app-primengcomp',
  templateUrl: './primengcomp.component.html',
  styleUrls: ['./primengcomp.component.css']
})
export class PrimengcompComponent implements OnInit {
  Emp: Employees[];

  cols: any[];

  selectedEmp: Employees;

  selectCars: Employees[];

  items: MenuItem[];
  items1: MenuItem[];
  reactiveForm: FormGroup;
  updatedItem: number;
  title = 'Employees';
  closeResult: string;
  selectedEmployeeOption: string;
  id: number;
  name: string;
  msg = 'Are You Sure!';
  description: string;
  errors;
  config: any;
  collection: Employees[] = [];

  display: boolean = false;
  constructor(private _data: EmpdataService, private confirmationService: ConfirmationService,
    private modalService: NgbModal, private fb: FormBuilder, private messageService: MessageService) {
    this.config = {
      itemsPerPage: 5,
      currentPage: 1,
      totalItems: this.collection.length
    };

  }


  ngOnInit() {

    this._data.getAllEmployees().subscribe(
      (data: Employees[]) => {
        this.Emp = data;
      },
      function (error) {
        alert(error);
      },
      function () { }
    );



    this.cols = [
      { field: 'name', header: 'name' },
      { field: 'description', header: 'description' }

    ];
    this.items = [
      { label: 'Add', icon: 'pi pi-search', command: (event) => this.add() },
      // { label: 'Edit', icon: 'pi pi-times', command: (event) => this.deleteCar(this.selectedEmp) },
      { label: 'View', icon: 'pi pi-search', command: (event) => this.viewCar(this.selectedEmp) },
      { label: 'Delete', icon: 'pi pi-times', command: (event) => this.deleteCar(this.selectedEmp) },

    ];
    this.reactiveForm = this.fb.group({
      name: new FormControl(null),
      description: new FormControl(null)
    });

  }//ng oninit


  viewCar(car: Employees) {
    this.messageService.add({ severity: 'info', summary: 'Emp Selected', detail: car.name + ' - ' + car.description });
  }




  deleteCar(car: Employees) {
    // console.log(car);
    this.confirmationService.confirm({
      message: "Are you sure that you want to proceed?",
      header: "Confirmation",
      icon: "pi pi-exclamation-triangle",
      accept: () => {

        let index = -1;
        for (let i = 0; i < this.Emp.length; i++) {
          if (this.Emp[i].name == car.name) {
            index = i;
            break;
          }
        }
        this.Emp.splice(index, 1);

        this.messageService.add({ severity: 'info', summary: 'Car Deleted', detail: car.name + ' - ' + car.description });
      },
      reject: () => {
        // this.msgs = [{severity:'info', summary:'Rejected', detail:'You have rejected'}];
      }
    });


  }



  onSearch(value) {

    console.log(value);
    if (value != '') {
      this.Emp = this.Emp.filter(x => x.name.indexOf(value) != -1);

    }
    else {
      this._data.getAllEmployees().subscribe(
        (data: Employees[]) => {
          this.Emp = data;
        },
        function (error) {
          alert(error);
        },
        function () { }
      );
    }


  }

  // emp Add

  add() {
    this.display = true;
  }


  onFormSubmit(item) {
    console.log(item);

    this._data.addEmployees(item).subscribe(
      (data: Employees[]) => {
        this.Emp = data;
        this.messageService.add({ severity: 'info', summary: 'Emp Added' });
        this.display=false;
      }
    );
  }
}

