import { Component, OnInit } from '@angular/core';
import { EmpdataService } from '../empdata.service';
import { Employees } from '../employeedisplay/employee';
import { Router } from '@angular/router';



@Component({
  selector: 'app-addemployee',
  templateUrl: './addemployee.component.html',
  styleUrls: ['./addemployee.component.css']
})
export class AddemployeeComponent implements OnInit {

  arr: Employees[] = [];
  name: string;
  description: string;
  constructor(private _data: EmpdataService,private _router:Router) {}


  onSaveEmp(f) {
    this._data.addEmployees(f.value).subscribe((data: any) => {
      console.log(data);
      alert('Employee Added');
      this._router.navigate(['']);
    });
    this.name='';
    this.description='';
  }

  ngOnInit() { }

}






// import { Component, Input } from '@angular/core';
// import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';

// @Component({
//   selector: 'ngbd-modal-content',
//   template: `
//     <div class="modal-header">
//       <h4 class="modal-title">Hi there!</h4>
//       <button type="button" class="close" aria-label="Close" (click)="activeModal.dismiss('Cross click')">
//         <span aria-hidden="true">&times;</span>
//       </button>
//     </div>
//     <div class="modal-body">
//       <p>Hello, {{name}}!</p>
//     </div>
//     <div class="modal-footer">
//       <button type="button" class="btn btn-outline-dark" (click)="activeModal.close('Close click')">Close</button>
//     </div>
//   `
// })
// export class NgbdModalContent {
//   @Input() name;

//   constructor(public activeModal: NgbActiveModal) {}
// }

// @Component({
//   selector: 'app-addemployee',
//   templateUrl: './addemployee.component.html',
//   // styleUrls: ['./addemployee.component.css']
//   // selector: 'ngbd-modal-component',
//   // templateUrl: './modal-component.html'
// })
// export class AddemployeeComponent {
//     constructor(private modalService: NgbModal) {}

//     open() {
//       const modalRef = this.modalService.open(NgbdModalContent);
//       modalRef.componentInstance.name = 'World';
//     }
//   }

