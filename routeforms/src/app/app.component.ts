import { Component ,OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { AccountService } from './services/accounts.service';

 @Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'routeforms';

  constructor(public router: Router, private accountService: AccountService){

  }
  
  ngOnInit():void{
    if(this.accountService.isAuthenticated()){
      // TODO
    }
    else {
      this.router.navigate(['/login']);
    }

  }

 
}