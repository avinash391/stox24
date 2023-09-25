import { Component,ViewChild, ElementRef  } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiDataService } from 'src/app/services/dataservice/api-data.service';
import { GlobalService } from 'src/app/services/global.service';
import { LoginService } from 'src/app/services/login.service';
import { SharedDataService } from 'src/app/services/sharedData/shared-data.service';
import { ToastrService } from 'ngx-toastr';
// import { SessionService } from 'src/app/services/session.service';

import swal from 'sweetalert2';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  @ViewChild('myForm') myForm!: ElementRef;

  ReadMore:boolean = false;
  loginForm:any=FormGroup;
tab1:boolean=true;
singnup:boolean=false;

  visible:boolean = true
  submited: boolean = false;
  profileID: any;
  response: any;
  // formEl!: HTMLFormElement;
  // inputs!: NodeListOf<HTMLElement>;

  // loginForm!: FormGroup;

  onclick()
  {
    this.ReadMore = !this.ReadMore;
    this.visible = !this.visible
  }
  constructor(private services:ApiDataService, private serviceslogin:LoginService,  private toastrService: ToastrService,private globalService:GlobalService,private formBuilder: FormBuilder,  private router:Router,public shareService:SharedDataService) {
    this.shareService.selectedsignupValue.subscribe((res)=>{
      this.singnup=res
          // console.log("this.singnup", this.singnup)
        })
  }

  ngOnInit(): void {



      this.loginForm = this.formBuilder.group({
      userName: ['', [Validators.required, Validators.maxLength(50), Validators.min(2)]],
      password: ['', [Validators.required, Validators.maxLength(50), Validators.min(2)]],
      rememberMe: ['',[]]

    })

    const rememberMe = localStorage.getItem('rememberMe') === 'true';
  const loginID = localStorage.getItem('loginID') || '';
  const password = localStorage.getItem('password') || '';

  this.loginForm = this.formBuilder.group({
    userName: [loginID, [Validators.required, Validators.maxLength(50), Validators.min(2)]],
    password: [password, [Validators.required, Validators.maxLength(50), Validators.min(2)]],
    rememberMe: [rememberMe]
  });


  }

  get f() { return this.loginForm.controls; }

  hideClick(){
    this.shareService.signUPData(false)
  }
  setValue(val:any){
    console.log("val", val.target.checked)

  }
  submit(){

    this.submited = true;

    if (this.loginForm.invalid) {
      return;
    }

    let obj={
      User: this.loginForm.value.userName,
      Password: this.loginForm.value.password,
      Key:''
    }


    let formData = new FormData();
    formData.append('email', `${this.loginForm.value.userName}`);
    formData.append('password', `${this.loginForm.value.password}`);
    // this.submited = true;


    if( this.loginForm.value.rememberMe){
      localStorage.setItem('rememberMe', 'true');
    localStorage.setItem('loginID', this.loginForm.value.userName);
    localStorage.setItem('password', this.loginForm.value.password);
  } else {
    localStorage.removeItem('rememberMe');
    localStorage.removeItem('loginID');
    localStorage.removeItem('password');
  }




    // this.loginForm.reset();


  // stocx
this.services.USER_LOGIN(formData).subscribe(data => {
  console.log(data,"login from my own service");
  // this.shareService.loader(true);
  console.log(data);

});

    this.services.LOGIN_USER(obj).subscribe((data:any) =>

       {
        this.shareService.loader(true);
      console.log(data);


      if(data.isOK==true && data.oStat_Login ==2)(
        this.response=data,
        this.profileID=data.Login,
         localStorage.setItem('token',(JSON.stringify(data))),
        // sessionStorage.setItem('ProfileID',data.Login),
        localStorage.setItem('ProfileID',data.Login),
        this.getUserStage(),
        this.getUserInfo()
        // this.router.navigate(['/onboading-kyc'])

    )


      else if(data.isOK==false )(
        this.toastrService.error('Invalid Credentials!!', 'Please Login Again!'),
        this.shareService.loader(false),
        this.loginForm.get('password')?.reset(),
        this.router.navigate(['/login'])

    )


      },

     (error:any) => {
       return (
         this.toastrService.error('Please try again!', 'Login Failed!'),

         console.log("at error", error)

       );
     });
  }


  navigate(){

      this.router.navigate(['/dashboard']);

  }

getUserInfo(){
  console.log("TESTING LOGIN")
  let params = {
    key: '',
    Profile:this.profileID
  }
  this.services.GET_USER_INFO(params).subscribe((data:any)=>{
    console.log("hellotesting",data);
    this.shareService.ProfileData(data);

  })
}
getUserStage(){
 console.log("TESTING LOGIN")
  let params = {
    ProfileId: this.profileID,
    Key:''
}
this.services.GET_USER_STAGE(params).subscribe((data:any)=>{
  console.log("kjhdfkjshtest",data)
  if(data.Result==0){
    this.router.navigate(['/onboading-kyc']);
    this.shareService.loader(false);
   }
   else if(data.Result == 1){

    this.router.navigate(['/onboading-kyc/adhar-verify']);
    this.shareService.loader(false);
   }
   else if(data.Result== 2){
    this.router.navigate(['/onboading-kyc/personal-detail']);
    this.shareService.loader(false);
   }
   else if(data.Result== 8){
    this.router.navigate(['/onboading-kyc/bank-detail']);
    this.shareService.loader(false);
   }
   else if(data.Result== 4){
    this.router.navigate(['/onboading-kyc/video-verify']);
    this.shareService.loader(false);
   }
   else if(data.Result== 5){
    this.router.navigate(['/onboading-kyc/esign']);
    this.shareService.loader(false);
   }
   else if(data.Result== 6){
    this.router.navigate(['/dashboard']);
    this.shareService.loader(false);
    // this.sessionService.setSession('active', 2);
   }
})
}
}
