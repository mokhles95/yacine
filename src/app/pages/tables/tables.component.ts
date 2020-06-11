import { Component, OnInit } from "@angular/core";
import { LocalDataSource } from 'ng2-smart-table';
import { UserService } from 'src/services/UserService';


@Component({
  selector: "app-tables",
  templateUrl: "tables.component.html",
  styleUrls: ['tables.component.scss']
})
export class TablesComponent implements OnInit {
  settings = {
    add: {
      addButtonContent: '<i class="nb-plus"></i>',
      createButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
    },
    edit: {
      editButtonContent: '<i class="nb-edit"></i>',
      saveButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
    },
    delete: {
      deleteButtonContent: '<i class="nb-trash"></i>',
      confirmDelete: true,
    },
    columns: {
      login: {
        title: 'Email',
        type: 'string',
      },
      firstName: {
        title: 'First Name',
        type: 'string',
      },
      lastName: {
        title: 'Last Name',
        type: 'string',
      },
      role: {
        title: 'Role',
        type: 'string',
      },
    },
  };
  source: LocalDataSource = new LocalDataSource();
  usersList = []
  constructor(private us : UserService) {
   /* this.source.load([{
      'id': 16,
      'firstName': 'Francisca',
      'lastName': 'Brady',
      'username': '@Gibson',
      'email': 'franciscagibson@comtours.com',
      'age': 11,
    }, {
      'id': 17,
      'firstName': 'Tillman',
      'lastName': 'Figueroa',
      'username': '@Snow',
      'email': 'tillmansnow@comtours.com',
      'age': 34,
    }, {
      'id': 18,
      'firstName': 'Jimenez',
      'lastName': 'Morris',
      'username': '@Bryant',
      'email': 'jimenezbryant@comtours.com',
      'age': 45,
    }, {
      'id': 19,
      'firstName': 'Sandoval',
      'lastName': 'Jacobson',
      'username': '@Mcbride',
      'email': 'sandovalmcbride@comtours.com',
      'age': 32,
    }, {
      'id': 20,
      'firstName': 'Griffin',
      'lastName': 'Torres',
      'username': '@Charles',
      'email': 'griffincharles@comtours.com',
      'age': 19,
    }, {
      'id': 21,
      'firstName': 'Cora',
      'lastName': 'Parker',
      'username': '@Caldwell',
      'email': 'coracaldwell@comtours.com',
      'age': 27,
    }, {
      'id': 22,
      'firstName': 'Cindy',
      'lastName': 'Bond',
      'username': '@Velez',
      'email': 'cindyvelez@comtours.com',
      'age': 24,
    }, {
      'id': 23,
      'firstName': 'Frieda',
      'lastName': 'Tyson',
      'username': '@Craig',
      'email': 'friedacraig@comtours.com',
      'age': 45,
    }, {
      'id': 24,
      'firstName': 'Cote',
      'lastName': 'Holcomb',
      'username': '@Rowe',
      'email': 'coterowe@comtours.com',
      'age': 20,
    }, {
      'id': 25,
      'firstName': 'Trujillo',
      'lastName': 'Mejia',
      'username': '@Valenzuela',
      'email': 'trujillovalenzuela@comtours.com',
      'age': 16,
    }, {
      'id': 26,
      'firstName': 'Pruitt',
      'lastName': 'Shepard',
      'username': '@Sloan',
      'email': 'pruittsloan@comtours.com',
      'age': 44,
    }, {
      'id': 27,
      'firstName': 'Sutton',
      'lastName': 'Ortega',
      'username': '@Black',
      'email': 'suttonblack@comtours.com',
      'age': 42,
    }, {
      'id': 28,
      'firstName': 'Marion',
      'lastName': 'Heath',
      'username': '@Espinoza',
      'email': 'marionespinoza@comtours.com',
      'age': 47,
    }, {
      'id': 29,
      'firstName': 'Newman',
      'lastName': 'Hicks',
      'username': '@Keith',
      'email': 'newmankeith@comtours.com',
      'age': 15,
    }, {
      'id': 30,
      'firstName': 'Boyle',
      'lastName': 'Larson',
      'username': '@Summers',
      'email': 'boylesummers@comtours.com',
      'age': 32,
    }])*/
  }

  ngOnInit() {
   /* this.us.getAll().subscribe(res=>{this.usersList=JSON.parse(JSON.stringify(res))},
      e=>{},
      ()=>{
        console.log(this.usersList)
        this.source.load(this.usersList)
      })*/
  }

  onCreateConfirm(event): void {
    if (window.confirm('Are you sure you want to delete?')) {
      event.confirm.resolve();
    } else {
      event.confirm.reject();
    }
  }

  onEditConfirm(event): void {
    if (window.confirm('Are you sure you want to delete?')) {
      event.confirm.resolve();
    } else {
      event.confirm.reject();
    }
  }

  onDeleteConfirm(event): void {
    if (window.confirm('Are you sure you want to delete?')) {
      event.confirm.resolve();
    } else {
      event.confirm.reject();
    }
  }
}
