import { Component, OnInit } from '@angular/core';
import { Task } from "./task";
import {NgbModal, ModalDismissReasons, NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder, Validators, FormGroup, FormControl } from "@angular/forms";
import { Status } from './status';
@Component({
selector: 'app-taskdisplay1',
templateUrl: './taskdisplay1.component.html',
styleUrls: ['./taskdisplay1.component.css']
})
export class Taskdisplay1Component implements OnInit {
closeResult: string;
updatedItem;
selected;
isSubmitted = false;
task_id;
title='';
due_date='';
desc='';
priority='';
assigned_to='';
assigned_date='';
comments='';
status='';
id='';
taskreactive:FormGroup;
arr:Task[]=[
new Task(1,'create website','14/08/2019','Online room booking','High','keerti','13/08/2019','good design','todo'),
new Task(3,'Adding filter','19/08/2019','User friendly','High','keerti','13/08/2019','good design','todo'),
new Task(4,'create website','17/08/2019','Online room booking','High','keerti','13/08/2019','good design','In Progress'),
new Task(6,'create website','19/08/2019','Online room booking','High','keerti','13/08/2019','good design','In Progress'),
new Task(9,'create website','13/08/2019','Online room booking','High','keerti','13/08/2019','good design','todo'),
new Task(10,'create website','24/08/2019','Online room booking','High','keerti','13/08/2019','good design','Development Completed'),
new Task(10,'create website','24/08/2019','Online room booking','High','keerti','13/08/2019','good design','Development Completed'),
new Task(10,'create website','24/08/2019','Online room booking','High','keerti','13/08/2019','good design','QA Progress'),
new Task(10,'create website','24/08/2019','Online room booking','High','keerti','13/08/2019','good design','System Testing Started'),
new Task(10,'create website','24/08/2019','Online room booking','High','keerti','13/08/2019','good design','QA Progress'),
new Task(10,'create website','24/08/2019','Online room booking','High','keerti','13/08/2019','good design','System Testing Started'),
new Task(10,'create website','24/08/2019','Online room booking','High','keerti','13/08/2019','good design','QA Progress'),
new Task(10,'create website','24/08/2019','Online room booking','High','keerti','13/08/2019','good design','System Testing Completed')
];
arr1:Status[]=[
  new Status(1,'todo'),
  new Status(2,'In Progress'),
  new Status(3,'Development Completed'),
  new Status(4,'QA Progress'),
  new Status(5,'System Testing Started'),
  new Status(6,'System Testing Completed')
];

constructor(private modalService: NgbModal,private fb: FormBuilder) { }

ngOnInit() {
  this.taskreactive=this.fb.group({
    task_id:new FormControl(),
    title:new FormControl(),
    due_date:new FormControl(),
    desc:new FormControl(),
    priority:new FormControl(),
    assigned_to:new FormControl(),
    assigned_date:new FormControl(),
    comments:new FormControl(),
    status:new FormControl()
  });

}
openEdit(content,i){
  console.log(i);

  this.updatedItem = i;
  this.taskreactive.patchValue({
    task_id : this.arr[i].task_id,
  title:this.arr[i].title,
  due_date: this.arr[i].due_date,
  desc: this.arr[i].desc,
  priority:this.arr[i].priority,
  assigned_to:this.arr[i].assigned_to,
  assigned_date:this.arr[i].assigned_date,
comments: this.arr[i].comments,
status:this.arr[i].status

  });
  console.log(this.task_id);
  this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then(
  result => {
  this.closeResult = `Closed with: ${result}`;
  },
  reason => {
  this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
  }
  );
  }
  private getDismissReason(reason: any): string {
  if (reason === ModalDismissReasons.ESC) {
  return 'by pressing ESC';
  } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
  return 'by clicking on a backdrop';
  } else {
  return `with: ${reason}`;
  }
  }
  UpdateItem() {
  //console.log(f.value);
  let data = this.updatedItem;
  // console.log(data);
  for (let i = 0; i < this.arr.length; i++) {
  if (i == data) {
  this.arr[i].task_id= this.taskreactive.value.task_id;
  this.arr[i].title = this.taskreactive.value.title;
  this.arr[i].due_date = this.taskreactive.value.due_date;
  this.arr[i].desc = this.taskreactive.value.desc;
  this.arr[i].priority = this.taskreactive.value.priority;
  this.arr[i].assigned_to = this.taskreactive.value.assigned_to;
  this.arr[i].assigned_date = this.taskreactive.value.assigned_date;
  this.arr[i].comments = this.taskreactive.value.comments;
  this.arr[i].status=this.taskreactive.value.status;


  console.log(this.arr);
  this.task_id='';
  this.title='';
  this.due_date='';
  this.desc='';
  this.priority='';
  this.assigned_to='';
  this.assigned_date='';
  this.comments='';
  this.status='';
  alert('Updated Successfully');
  this.ngOnInit();
  }
  }
  }
// openEdit(content,i){
// console.log(i);
// this.task_id = this.arr[i].task_id;
// this.title= this.arr[i].title;
// this.due_date= this.arr[i].due_date;
// this.desc= this.arr[i].desc;
// this.priority= this.arr[i].priority;
// this.assigned_to= this.arr[i].assigned_to;
// this.assigned_date= this.arr[i].assigned_date;
// this.comments= this.arr[i].comments;
// this.status=this.arr[i].status;


// this.updatedItem = i;
// console.log(this.task_id);
// this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then(
// result => {
// this.closeResult = `Closed with: ${result}`;
// },
// reason => {
// this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
// }
// );
// }
// private getDismissReason(reason: any): string {
// if (reason === ModalDismissReasons.ESC) {
// return 'by pressing ESC';
// } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
// return 'by clicking on a backdrop';
// } else {
// return `with: ${reason}`;
// }
// }
// UpdateItem() {
// //console.log(f.value);
// let data = this.updatedItem;
// // console.log(data);
// for (let i = 0; i < this.arr.length; i++) {
// if (i == data) {
// this.arr[i].task_id= this.task_id;
// this.arr[i].title = this.title;
// this.arr[i].due_date = this.due_date;
// this.arr[i].desc = this.desc;
// this.arr[i].priority = this.priority;
// this.arr[i].assigned_to = this.assigned_to;
// this.arr[i].assigned_date = this.assigned_date;
// this.arr[i].comments = this.comments;
// this.arr[i].status=this.status;


// console.log(this.arr);
// this.task_id='';
// this.title='';
// this.due_date='';
// this.desc='';
// this.priority='';
// this.assigned_to='';
// this.assigned_date='';
// this.comments='';
// this.status='';
// alert('Updated Successfully');
// }
// }
// }
// registrationForm = this.fb.group({
// statusName: ['', [Validators.required]]
// })
// get statusName() {
// return this.registrationForm.get('statusName');
// }
// onSubmit() {
// this.isSubmitted = true;
// if (!this.registrationForm.valid) {
// return false;
// } else {
// alert(JSON.stringify(this.registrationForm.value))
// }

// }
// changeStatus(e) {
// this.statusName.setValue(e.target.value, {
// onlySelf: true
// })
// }
// pushCard(){
// this.inprogress.push(new Task(this.task_id,this.title,this.due_date, this.desc,this.priority,this.assigned_to,this.assigned_date,this.comments,this.status));
// alert("Added Successfully");

// }

}

