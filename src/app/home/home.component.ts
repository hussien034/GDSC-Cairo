import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


getRef($event: {}) {
throw new Error('Method not implemented.');
}
fullpage_api: any;
config: any;

  constructor(private _Router:Router) {

   }
 goToCourses(){
      this._Router.navigateByUrl('/courses')
    }
  ngOnInit(): void {
  }

}
function goToCourses() {
  throw new Error('Function not implemented.');
}


