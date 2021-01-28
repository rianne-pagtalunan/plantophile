import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {


  id:any;

  catid:any;
  desserts:any;
  constructor(public http: HttpClient,private route: ActivatedRoute) { }

  ngOnInit(): void {

    this.id = this.route.snapshot.paramMap.get('id');
    if(this.id){
      this.http.get<object>('./assets/datadump.json').subscribe(
        (data:any) => {
          //console.log(data.desserts instanceof Array);
          this.desserts = data.desserts.find((n: any) => n.id == this.id);          
       //   console.log(this.desserts);
        });
    }
  }




}
