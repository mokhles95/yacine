import { Component, OnInit } from '@angular/core';
import { User } from 'src/models/User';
import { Cas } from 'src/models/cas';
import { CasService } from '../../../services/casService'

import { Router } from '@angular/router';
import { LocalDataSource } from 'ng2-smart-table';
import { FileRenderComponentComponent } from '../file-render-component/file-render-component.component';

@Component({
  selector: 'app-cas',
  templateUrl: './cas.component.html',
  styleUrls: ['./cas.component.scss']
})
export class CasComponent implements OnInit {

  settings = {
    add: {
      addButtonContent: '<i class="nb-plus"></i>',
      createButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
      confirmCreate: true,
    },
    edit: {
      editButtonContent: '<i class="nb-edit"></i>',
      saveButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
      confirmSave: true,
    },
    delete: {
      deleteButtonContent: '<i class="nb-trash"></i>',
      confirmDelete: true,
    },
    columns: {
     
      Localisation: {
        title: 'localisation',
        type: 'string',
      },
    
      description: {
        title: 'description',
        type: 'string',
      },
     
      image: {
        title: 'image',
        type: 'html',
        filter: false,
        editor: {
        type: 'custom',
        component: FileRenderComponentComponent,
        },
        valuePrepareFunction : (value)=>{
          return '<img src="'+value+'" width="100px" height="100px">'
        }
      },
     

    },
    pager : {
      display : true,
      perPage:5
      }
  };
  user :User
  cas : Cas
  source: LocalDataSource = new LocalDataSource();
  usersList = []
 
  constructor(private cs:CasService, public router: Router) {
  
  }
cases:Cas[] = [];
  formData = new FormData();
  
  ngOnInit() {
   
  this.user = JSON.parse(localStorage.getItem('user'))
  this.cs.getAll().subscribe(res=>{
    this.cases=JSON.parse(JSON.stringify(res));
  },e=>{

  },
  ()=>{
      this.source.load(this.cases)
      console.log(this.cases)
  }
  )

  
  }
 
  onCreateConfirm(event): void {

    this.formData.set('Localisation',event.newData.localisation);
    this.formData.set('Description',event.newData.description);
    this.formData.set('image',event.newData.image[0]);
    this.cs.addCas(this.formData).subscribe(
      result=>{

      },
      e=>{

      },
      ()=>{
        event.confirm.resolve();
this.ngOnInit()

      }
    )
  }

  onEditConfirm(event): void {
   
  }

  onDeleteConfirm(event): void {
  
  }


}
