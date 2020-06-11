import { Component, OnInit, ViewChild } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';
import {EventService} from '../../../services/eventService'
import { Router } from '@angular/router';
import { FileRenderComponentComponent } from '../file-render-component/file-render-component.component';
import { Event } from 'src/models/event';
import { User } from 'src/models/User';
import { CalendarComponent } from 'src/app/calendar/calendar.component';


@Component({
  selector: 'app-add-events',
  templateUrl: './add-events.component.html',
  styleUrls: ['./add-events.component.scss']
})
export class AddEventsComponent implements OnInit {

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
    view: {
      viewButtonContent: '<i class="search-outline"></i>',
      confirmDelete: true,
    },
    columns: {
      _id:{
        title: 'id',
        show: false
      },
      titre: {
        title: 'title',
        type: 'date',
      },
      lieu: {
        title: 'lieu',
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
      date_event: {
        title: 'Date Event',
        type: 'html',
        filter: false,
        editor: {
        type: 'custom',
        component: CalendarComponent ,
        },
      },
     

    },
    pager : {
      display : true,
      perPage:5
      }
  };
  user :User
  source: LocalDataSource = new LocalDataSource();
  usersList = []
  event : Event = new Event()
  constructor(private es: EventService, public router: Router) {
  
  }
events:Event[] = [];
  formData = new FormData();
  
  ngOnInit() {
    if(this.settings.columns["_id"]!=undefined)
    if (this.settings.columns["_id"].hasOwnProperty("show")) {
      if (this.settings.columns["_id"].show ==false) {
        delete this.settings.columns["_id"];
      }
}
  this.user = JSON.parse(localStorage.getItem('user'))
  this.es.getAll().subscribe(res=>{
    this.events=JSON.parse(JSON.stringify(res));
  },e=>{

  },
  ()=>{
      this.source.load(this.events)
      console.log(this.events)
  }
  )

  
  }
 
  onCreateConfirm(event): void {

    console.log(event.newData)
    this.formData.set('Lieu',event.newData.lieu);
    this.formData.set('Date_event',event.newData.date_event);
    this.formData.set('Description',event.newData.description);
    this.formData.set('image',event.newData.image[0]);
    this.formData.set('Titre',event.newData.titre);
    this.formData.set('userId',this.user.userId.toString());
    this.es.addEvent(this.formData).subscribe(
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
    
    if (window.confirm('Are you sure you want to update?')) {
      this.formData.set('Lieu',event.newData.lieu);
      this.formData.set('Date_event',event.newData.date_event);
      this.formData.set('Description',event.newData.description);
      this.formData.set('image',event.newData.image[0]);
      this.formData.set('Titre',event.newData.titre);
      this.formData.set('userId',this.user.userId.toString());
   this.es.update(event.data._id,this.formData).subscribe(
     result=>{

     },
     e=>{
       console.log(e)

     },
     ()=>{
     this.ngOnInit()

     }
    )
    } else {
      event.confirm.reject();
    }
  }

  onDeleteConfirm(event): void {
    if (window.confirm('Are you sure you want to delete?')) {
    this.es.delete(event.data._id).subscribe(
      result=>{

      },
      e=>{
        console.log(e)
      },
      ()=>{
        this.ngOnInit()
      }
    )
    } else {
      event.confirm.reject();
    }
  }

}
