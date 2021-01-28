import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {


category:any;


  constructor(public http: HttpClient) { }

  ngOnInit(): void {
    this.http.get<object>('./assets/datadump.json').subscribe(
      (data:any) => {
        this.category = data.categories;
      
    })
  }

  

}
