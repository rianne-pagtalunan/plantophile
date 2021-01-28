import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-editp',
  templateUrl: './editp.component.html',
  styleUrls: ['./editp.component.css']
})
export class EditpComponent implements OnInit {

id:any;
desserts: any;
cond: boolean | undefined;
cond2: boolean | undefined;


    detailForm = new FormGroup({
        Dname: new FormControl(''),
        Origin: new FormControl(''),
        Description: new FormControl(''),

    });

  constructor(public http: HttpClient,private route: ActivatedRoute) {

    this.id = this.route.snapshot.paramMap.get('id');
    
    if(this.id){
      this.http.get<object>('./assets/datadump.json').subscribe(
        (data:any) => {          
          this.desserts = data.desserts.find((n: any) => n.id == this.id);          
          this.detailForm.get('Dname')?.setValue(this.desserts.name);
          this.detailForm.get('Origin')?.setValue(this.desserts.origin);
          this.detailForm.get('Description')?.setValue(this.desserts.description);
        });
    }
      
   }

  ngOnInit(): void {
   
  }
  onSubmit(){
    console.warn(this.detailForm.value);
      //check if there are values on the input fields
      let a = this.detailForm.get('Dname')?.value;
      let b = this.detailForm.get('Origin')?.value;
      let c = this.detailForm.get('Description')?.value;

     

    
          if(this.desserts.name == a && this.desserts.origin == b && this.desserts.description == c) {
              this.cond = false;
          }
          else{
            this.cond = true;
          }
        
  }

  onCancel(){
    let a = this.detailForm.get('Dname')?.value;
    let b = this.detailForm.get('Origin')?.value;
    let c = this.detailForm.get('Description')?.value;
          if(this.desserts.name == a && this.desserts.origin == b && this.desserts.description == c) {
            this.cond2 = false;
        }
        else{
          this.cond2 = true;
        }
  }



}
