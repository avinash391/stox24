import { Component } from '@angular/core';
// import { AnyCatcher } from 'rxjs/internal/AnyCatcher';
import { GlobalService } from './services/global.service';
import { SharedDataService } from './services/sharedData/shared-data.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  addClass:boolean=false;
  isLoader:boolean = false;
  isSidebarVisible: any=true;
  constructor(public service:GlobalService, public global:GlobalService, public sharedData:SharedDataService, private toastrService: ToastrService)
  {
    // this.toastrService.success('Message Success!', 'Title Success!');
    // console.log("service.isLoggedIn()", service.isLoggedIn())
    // if(service.isLoggedIn()){
    //   this.addClass=true
    // }
    
    this.sharedData.loader(false);
    this.sharedData.selectedloaderValue.subscribe((val:any)=>{
      this.isLoader=val;
    })


    this.sharedData.sidebarVisibilityChange.subscribe((isVisible: any) => {
      this.isSidebarVisible = isVisible;
      console.log("sidebar",this.isSidebarVisible)
    });
    // this.sessionService.setSession('active', 2);

  }
  title = 'abbotwealth';

  
  public showSuccess(): void {
    this.toastrService.success('Message Success!', 'Title Success!');
  }

  public showInfo(): void {
    this.toastrService.info('Message Info!', 'Title Info!');
  }

  public showWarning(): void {
    this.toastrService.warning('Message Warning!', 'Title Warning!');
  }

  public showError(): void {
    this.toastrService.error('Message Error!', 'Title Error!');
  }
  
}
