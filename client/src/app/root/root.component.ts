import { Component, OnInit } from '@angular/core';
import { ManagerService } from '../manager.service';
import { AuthService} from '../auth.service';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';

@Component({
  selector: 'app-root',
  templateUrl: './root.component.html',
  providers: [ManagerService]
})
export class RootComponent implements OnInit {
  title = 'root';
  user;
  
  
  constructor(private managerService: ManagerService, private authService: AuthService) { }

  ngOnInit() {
    this.getAllUser();
  }
  
  getAllUser() {
    this.managerService.getAllUser().subscribe(result =>{
      console.log('result is ', result);
      this.user = result['data'];
   
    });
  }

}
