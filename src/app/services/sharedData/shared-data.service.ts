import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Subject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class SharedDataService 
  {
    private signupValue = new BehaviorSubject<any>({});
    selectedsignupValue = this.signupValue.asObservable();

    private loaderValue = new BehaviorSubject<any>({});
    selectedloaderValue = this.loaderValue.asObservable();
    
    private classValue = new BehaviorSubject<any>('');
    selectedclassValue = this.classValue.asObservable();

    private sidebarVisible = true;
  sidebarVisibilityChange: Subject<boolean> = new Subject<boolean>();

    private profiledata = new BehaviorSubject<any>({});
    selectedprofileValue = this.profiledata.asObservable();
  
    constructor() {}
  
    signUPData(data: any) {
      this.signupValue.next(data);
    }
    loader(data: any) {
      this.loaderValue.next(data);
    }
    toggleClassValue(value: any) {
      console.log("valuevaluevaluevalue", value)
      this.classValue.next(value);
      
    }

    toggleSidebar(): void {
      this.sidebarVisible = !this.sidebarVisible;
      this.sidebarVisibilityChange.next(this.sidebarVisible);
    }
 
  ProfileData(data:any){
    // console.log("services",   data)
    this.profiledata.next(data);
  }

  }