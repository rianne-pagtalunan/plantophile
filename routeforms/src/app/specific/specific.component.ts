import { HttpClient } from '@angular/common/http';
import { Component, OnInit} from '@angular/core';

import { ActivatedRoute} from '@angular/router';
@Component({
  selector: 'app-specific',
  templateUrl: './specific.component.html',
  styleUrls: ['./specific.component.css']
})
export class SpecificComponent implements OnInit {

  cat:any;
  category:any;
  id:any;
  desserts: any;
  constructor(public http: HttpClient,private route: ActivatedRoute) {}//should i put paramMap in constructor?

  ngOnInit(): void {
  
    this.id = this.route.snapshot.paramMap.get('id');
  
    this.http.get<object>('./assets/datadump.json').subscribe(
      (data:any) => { 
    
        this.category = data.categories;
        this.desserts = data.desserts;
        this.desserts = data.desserts.filter((n: any) => n.categoryId == this.id);     
        this.cat = data.categories.find((n: any) => n.id == this.id);     
    })      
    
   }

}
