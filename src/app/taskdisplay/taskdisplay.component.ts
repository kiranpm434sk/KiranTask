import { Component, OnInit } from '@angular/core';
import { Task } from "./task";
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder, Validators } from "@angular/forms";

@Component({
  selector: 'app-taskdisplay',
  templateUrl: './taskdisplay.component.html',
  styleUrls: ['./taskdisplay.component.css']
})
export class TaskdisplayComponent implements OnInit {
  closeResult: string;
  updatedItem;
  selected;
  isSubmitted = false;
  Status: any = ['In Progress', 'Development Completed', 'QA Progress', 'System Testing Started','System Testing Completed'];
  todo:Task[]=[];
  inprogress:Task[]=[];
  devcom:Task[]=[];
  qa:Task[]=[];
  sts:Task[]=[];
  stc:Task[]=[];
  task_id;
  title='';
  due_date='';
  desc='';
  priority='';
  assigned_to='';
  assigned_date='';
  comments='';
  status='';
  chst;
  arr:Task[]=[
    new Task(1,'create 20 tasks','14/08/2019','Display records of tasks','High','keerti','13/08/2019','good design',''),
    new Task(2,'create a form for adding of task ','10/08/2019','form should submit selected status value','High','keerti','13/08/2019','good design',''),
    new Task(3,'Add edit button for all tasks','17/08/2019','Pop up will open after clicking on edit button','High','keerti','13/08/2019','good design',''),
    new Task(4,'Dropdown Menu','18/08/2019','Design drop down menu to select status of a task','High','keerti','13/08/2019','good design',''),
    new Task(5,'Adding filter','19/08/2019','User friendly','High','keerti','13/08/2019','good design',''),
    new Task(6,'create website','19/08/2019','Online room booking','High','keerti','13/08/2019','good design',''),
    new Task(7,'create website','16/08/2019','Online room booking','High','keerti','13/08/2019','good design',''),
    new Task(8,'create website','19/08/2019','Online room booking','High','keerti','13/08/2019','good design',''),
    new Task(9,'create website','13/08/2019','Online room booking','High','keerti','13/08/2019','good design',''),
    new Task(10,'create website','24/08/2019','Online room booking','High','keerti','13/08/2019','good design','')
  ];

  constructor(private modalService: NgbModal,public fb: FormBuilder) { }

  ngOnInit() {
  }
  openEdit(content,i){
    console.log(i);
    this.task_id = this.arr[i].task_id;
    this.title=  this.arr[i].title;
    this.due_date=  this.arr[i].due_date;
    this.desc=  this.arr[i].desc;
    this.priority=  this.arr[i].priority;
    this.assigned_to=  this.arr[i].assigned_to;
    this.assigned_date=  this.arr[i].assigned_date;
    this.comments=  this.arr[i].comments;


    this.updatedItem = i;
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
      return  `with: ${reason}`;
    }
  }
  UpdateItem() {
    //console.log(f.value);
    let data = this.updatedItem;
    // console.log(data);
    for (let i = 0; i < this.arr.length; i++) {
      if (i == data) {
        this.arr[i].task_id= this.task_id;
        this.arr[i].title = this.title;
        this.arr[i].due_date = this.due_date;
        this.arr[i].desc = this.desc;
        this.arr[i].priority = this.priority;
        this.arr[i].assigned_to = this.assigned_to;
        this.arr[i].assigned_date = this.assigned_date;
        this.arr[i].comments = this.comments;
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
      }
    }

  }
  registrationForm = this.fb.group({
    statusName: ['', [Validators.required]]
  })



  get statusName() {
    return this.registrationForm.get('statusName');
  }
  onSubmit() {
    this.isSubmitted = true;
    if (!this.registrationForm.valid) {
      return false;
    } else {
      alert(JSON.stringify(this.registrationForm.value))
    }

  }
  changeStatus(e) {
    this.statusName.setValue(e.target.value, {
      onlySelf: true
    })
  }
  pushCard(statusName){
    console.log(this.Status[0]);
    // if(statusName=="In Progress"){
    console.log(this.statusName);
    console.log(this.statusName.value[0]);
    if(this.statusName.value[0]==1){
      this.inprogress.push(new Task(this.task_id,this.title,this.due_date, this.desc,this.priority,this.assigned_to,this.assigned_date,this.comments,this.status));
      alert("Task is under In Progress state");
      this.modalService.dismissAll();
    }else if(this.statusName.value[0]==2){
      this.devcom.push(new Task(this.task_id,this.title,this.due_date, this.desc,this.priority,this.assigned_to,this.assigned_date,this.comments,this.status));
      alert("Task is under Development state");
      this.modalService.dismissAll();
    }else if(this.statusName.value[0]==3){
      this.qa.push(new Task(this.task_id,this.title,this.due_date, this.desc,this.priority,this.assigned_to,this.assigned_date,this.comments,this.status));
      alert("Task is under QA Progress state");
      this.modalService.dismissAll();
    }else if(this.statusName.value[0]==4){
      this.sts.push(new Task(this.task_id,this.title,this.due_date, this.desc,this.priority,this.assigned_to,this.assigned_date,this.comments,this.status));
      alert("Task is under System testing state");
      this.modalService.dismissAll();
    }else if(this.statusName.value[0]==5){
      this.stc.push(new Task(this.task_id,this.title,this.due_date, this.desc,this.priority,this.assigned_to,this.assigned_date,this.comments,this.status));
      alert("Task is under System testing completion  state");
      this.modalService.dismissAll();
    }
    // else{
    //     this.qa.push(new Task(this.task_id,this.title,this.due_date, this.desc,this.priority,this.assigned_to,this.assigned_date,this.comments,this.status));
    //     alert("Added Successfully");
    //   }
    // switch(statusName){
    //   case this.statusName.value[]:{
    //     console.log('hi');
    //     break;
    //   }
    //   case this.statusName.value[2]:{
    //     console.log('hieeee');
    //     break;
    //   }
    //   default:{
    //     console.log('gfsh');
    //   }
    // }
  }
}
// {"statusName":"1: In Progress"}
