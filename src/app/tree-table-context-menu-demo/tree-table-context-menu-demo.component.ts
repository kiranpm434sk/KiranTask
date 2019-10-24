import { Component, OnInit } from '@angular/core';
import { MenuItem, TreeNode, MessageService } from 'primeng/api';
import { EmpdataService } from '../empdata.service';
// import { NodeService } from '../node.service';
import { Employees } from '../employeedisplay/employee';
import { NodeService } from '../node.service';

@Component({
  selector: 'app-tree-table-context-menu-demo',
  templateUrl: './tree-table-context-menu-demo.component.html',
  styleUrls: ['./tree-table-context-menu-demo.component.css']
})
export class TreeTableContextMenuDemoComponent implements OnInit {

  files: TreeNode[];

  // files: Employees[];

  selectedNode: TreeNode;

  cols: any[];

  items: MenuItem[];

  constructor(private  nodeService: EmpdataService, private messageService: MessageService) { }
  // constructor(private  nodeService: NodeService, private messageService: MessageService) { }


  ngOnInit() {
      // this.nodeService.getAllEmployees().subscribe((data: Employees[]) =>{
      //   this.files = data;
      //   console.log(this.files);
      // });


      this.nodeService.getFilesystem().then(files => this.files = files);

      this.cols = [
        // { field: 'id', header: 'Id' },
        //   { field: 'name', header: 'Name' },
        //   { field: 'description', header: 'Description' },

        { field: 'name', header: 'Name' },
        { field: 'size', header: 'Size' },
        { field: 'type', header: 'Type' }

      ];

      this.items = [
        { label: 'Add', icon: 'pi pi-plus-square', command: (event) => this.AddField(this.selectedNode) },
          { label: 'View', icon: 'pi pi-search', command: (event) => this.viewFile(this.selectedNode) },
          { label: 'Toggle', icon: 'pi pi-sort', command: (event) => this.toggleFile(this.selectedNode) },

      ];
  }

  viewFile(node) {
      // this.messageService.add({ severity: 'info', summary: 'File Selected', detail: node.name + ' - ' + node.description });
      this.messageService.add({ severity: 'info', summary: 'File Selected', detail: node.data.name + ' - ' + node.data.size });
  }

  AddField(node){

  }

  toggleFile(node) {
      node.expanded = !node.expanded;
      this.files = [...this.files];
  }

}
