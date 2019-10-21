import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Employees } from '../employeedisplay/employee';
import { EmpdataService } from '../empdata.service';
import { ConfirmationService, MenuItem, MessageService } from "primeng/api";
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-emp',
  templateUrl: './emp.component.html',
  styleUrls: ['./emp.component.css']
})
export class EmpComponent implements OnInit {
  reactiveForm: FormGroup;

  constructor(private modalService: NgbModal, private _data: EmpdataService, private confirmationService: ConfirmationService, private fb: FormBuilder, private messageService: MessageService) {
    this.config = {
      itemsPerPage: 5,
      currentPage: 1,
      totalItems: this.collection.length
    };
  }
  updatedItem: number;
  title = 'Employees';
  closeResult: string;
  selectedEmployeeOption: string;
  id: number;
  name: string;
  msg = 'Are You Sure!';
  description: string;

  arrDesig: Employees[] = [];
  errors;
  config: any;
  collection: Employees[] = [];

  // primeng
  cars: Employees[];

  cols: any[];

  selectedCar: Employees;

  selectCars: Employees[];


  display: boolean = false;
  items: MenuItem[];
  items2: MenuItem[];



  ngOnInit() {
    this.items = [
      {
        label: 'File',
        icon: 'pi pi-fw pi-file',
        items: [{
          label: 'New',
          icon: 'pi pi-fw pi-plus',
          items: [
            { label: 'Project' },
            { label: 'Other' },
          ]
        },
        { label: 'Open' },
        { separator: true },
        { label: 'Quit' }
        ]
      },
      {
        label: 'Add',
        icon: 'pi pi-fw pi-pencil',
        command: (click: any) => {
          this.display = true;
        },
        items: [
          { label: 'Delete', icon: 'pi pi-fw pi-trash' },
          { label: 'Refresh', icon: 'pi pi-fw pi-refresh' }
        ]
      },
      {
        label: 'Help',
        icon: 'pi pi-fw pi-question',
        items: [
          {
            label: 'Contents'
          },
          {
            label: 'Search',
            icon: 'pi pi-fw pi-search',
            items: [
              {
                label: 'Text',
                items: [
                  {
                    label: 'Workspace'
                  }
                ]
              },
              {
                label: 'File'
              }
            ]
          }
        ]
      },
      {
        label: 'Actions',
        icon: 'pi pi-fw pi-cog',
        items: [
          {
            label: 'Edit',
            command: (click: any) => {
              this.display = true;
            },
            icon: 'pi pi-fw pi-pencil',
            items: [
              { label: 'Save', icon: 'pi pi-fw pi-save' },
              { label: 'Update', icon: 'pi pi-fw pi-save' },
            ]
          },
          {
            label: 'Other',
            icon: 'pi pi-fw pi-tags',
            items: [
              { label: 'Delete', icon: 'pi pi-fw pi-minus' }
            ]
          }
        ]
      },
      { separator: true },
      {
        label: 'Quit', icon: 'pi pi-fw pi-times'
      }
    ];



    this.reactiveForm = this.fb.group({
      name: new FormControl(null),
      description: new FormControl(null)
    });


    // setInterval(() => {
    //   // console.log('hi');
    //           this.GetEmp();
    //         }, 1000);





    this.GetEmp();
    this.function();
}









function() {

  console.log("Hello from functionNr1 before setTimeout in code");
  setTimeout(() => {
    console.log("Hello from setTimeout");
  }, 7000);

  console.log("Hello from functionNr1 after setTimeout in code");

}


GetEmp(){
  this._data.getAllEmployees().subscribe(
    (data: Employees[]) => {
      this.arrDesig = data;
      // this.loading=false;
    },
    function (error) {
      alert(error);
    },
    function () { }
  );

}

pageChanged(event){
  this.config.currentPage = event;
}


onSearch(value) {

  console.log(value);
  if (value != '') {
    this.arrDesig = this.arrDesig.filter(x => x.name.indexOf(value) != -1);

  }
  else {
    this._data.getAllEmployees().subscribe(
      (data: Employees[]) => {
        this.arrDesig = data;
      },
      function (error) {
        alert(error);
      },
      function () { }
    );
  }
  // this.GetEmp();

}




// SearchEmployee(value){
//   if (value != "") {
//     this.arrDesig = this.arrDesig.filter(x => x.name.indexOf(value) != -1);
//   } else {
//     this._data.getAllEmployees().subscribe(
//       (data: Employees[]) => {
//         this.arrDesig = data;
//       },
//       function(error) {
//         alert(error);
//       },
//       function() {}
//     );
//   }
// }

// Add modal
openAdd(content, passedTitle) {
  this.selectedEmployeeOption = passedTitle;

  this.name = '';
  this.description = '';
  this.modalService.open(content);

  var req = {
    backdrop: false,
  };
  this.modalService.open(content, req);
}

// Edit modal popup
openEdit(content, passedTitle, i, emp) {
  console.log(content);
  this.selectedEmployeeOption = passedTitle;

  this.name = emp.name;
  this.description = emp.description;

  this.updatedItem = i;

  this.modalService.open(content);
}


// delete
onEmpDelete(item: Employees) {
  console.log(item);
  this._data.deleteEmployees(item.id).subscribe((data: any) => {
    this.arrDesig.splice(this.arrDesig.indexOf(item), 1);
    alert('deleted');
    this.ngOnInit();

  });

}

onFormSubmit(reactiveForm) {
  if (this.selectedEmployeeOption == "Add") {
    console.log(this.name);
    console.log(this.description);
    this._data.addEmployees(reactiveForm.value).subscribe(
      (data: Employees[]) => {
        this.arrDesig = data;
        alert('succefully added');
      },

      function (error) {
        alert(error);
      },
      function () { }
    );
  }
  else {
    let data = this.updatedItem;

    for (let i = 0; i < this.arrDesig.length; i++) {
      if (i == data) {
        this.arrDesig[i].name = this.name;
        this.arrDesig[i].description = this.description;
        console.log(this.arrDesig);


        this.name = '';
        this.description = '';
      }
    }
  }
  this.modalService.dismissAll();
}

confirmDelete(id: any) {
  console.log(id);
  this.confirmationService.confirm({
    message: "Are you sure that you want to proceed?",
    header: "Confirmation",
    icon: "pi pi-exclamation-triangle",
    accept: () => {
      this.onEmpDelete(id);
      alert('deleted');
      // this.msgs = [{severity:'info', summary:'Confirmed', detail:'You have accepted'}];
    },
    reject: () => {
      // this.msgs = [{severity:'info', summary:'Rejected', detail:'You have rejected'}];
    }
  });
}

}
