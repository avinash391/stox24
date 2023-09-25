import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiDataService } from 'src/app/services/dataservice/api-data.service';
import { GlobalService } from 'src/app/services/global.service';
import{SharedDataService} from "../../../services/sharedData/shared-data.service";
import { Router,ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import swal from 'sweetalert2';
import { environment } from 'src/environments/environment';
import { interval,Subscription, Observable } from 'rxjs';
@Component({
  selector: 'app-video-verify',
  templateUrl: './video-verify.component.html',
  styleUrls: ['./video-verify.component.scss']
})
export class VideoVerifyComponent {
  domain=environment.redirectUrl;
  fileError: any ="";
  PANimg: any="";
  token: any;
  url: any;
  patronID: any;
  videoKYC:any={};
  KYCmatchValue: any;
  vidKYCstatus: any;
  isNextButtonDisabled:boolean = true;
  videoButton:boolean=false;
  KYCVideo: any;
  private intervalSubscription!: Subscription;
constructor(private http:HttpClient,private services: ApiDataService, 
  private globalService: GlobalService, public shareddata:SharedDataService, public rout:Router, private toastrService: ToastrService, private activateRoute:ActivatedRoute){
    this.getKycInfo()
    console.log("sdrftretr")
    this.vidKYCstatus = this.activateRoute.snapshot.queryParamMap.get('status');
    console.log("sdrftretr", this.vidKYCstatus )
    if (this.vidKYCstatus == 'success') {
      this.shareddata.loader(true);
      this.videoButton=true;

      this.intervalSubscription = interval(8000).subscribe(() => {
        this.verifyVideoKYC().subscribe((response: any) => {
          if (response && response.statusCode === 404 && response.name === 'Error' && response.message === 'Video Verification is not completed till now') {
            // Error message received, continue hitting the API
          } else {
            console.log("responseresponse", response)
           
      this.KYCmatchValue = response.result.videoVerification.videoFaceMatch[0].matchStatistics;
      this.KYCVideo = response.result.videoVerification.video;
      console.log("KYC MATCH VALUE",this.KYCmatchValue)
      this.stringTOnum(this.KYCmatchValue.matchPercentage);

            this.intervalSubscription.unsubscribe();
          }
        });
      });

     
    }
    
    this.shareddata.toggleClassValue(4);
    console.log("this.intervalSubscription", this.intervalSubscription)
  }



  ngOnInIt(): void {
   
   

}

getKycInfo(){
  let obj = {
    ProfileId: localStorage.getItem('ProfileID'),
    Key: " ",
    oKYC_Type: 1
}
this.services.GET_USER_KYC_INFO(obj).subscribe((data:any)=>{
  console.log("dataKYC for Video KYC", data);
  this.PANimg = data.Path
})
}

  startVideoKYC(){
    // this.PANimg=localStorage.getItem('PANimg');
    let obj = 
      {
        "task" : "url",
        "essentials" : {
            "matchImage" : [this.PANimg],
            "customVideoRecordTime": "5",
            "hideTopLogo":"true",
            "hideBottomLogo":"true",
            "callbackUrl" : "http://178.238.234.59:3000/123",
            "redirectUrl" :this.domain + "onboading-kyc/video-verify?status=success",

            // "redirectUrl" : "http://localhost:4200/#/onboading-kyc/video-verify?status=success",
            "idCardVerification":"true",
            "customizations":{}
        }
      }
      this.services.videoKYC(obj).subscribe((data:any)=>{
        console.log(data);
        // this.videoKYC={
        //   token:this.token,patronId:this.patronID
        // }
        this.token=data.result.token;
        this.url=data.result.videoUrl;
        this.patronID=data.patronId;
        localStorage.setItem("token",this.token);
        localStorage.setItem("patronID",this.patronID);
        window.open(this.url);
      })
    
  }
uploadVideoDB(){
  let obj= {
    "Path":this.KYCVideo,
    "Details":"",
    "oStage":5,
    "oKYC_DOC":{
        "ProfileId":localStorage.getItem('ProfileID'),
        "oKYC_Type":6,
        "oStatus":2
    },
    "Key":""
}
this.services.UPLOAD_KYC_DOC(obj).subscribe((data:any)=>{
  console.log(data)
 
  this.toastrService.success('Your Video verification is complete.')
},(error)=>{
  
  this.toastrService.error('Your Video verification is failed. Please try again.','Error!!')
  this.shareddata.loader(false)
})
}

  
verifyVideoKYC1(){
  this.shareddata.loader(true);
   let obj=
    {
      "task" : "getData",
      "essentials" : {
          "token": localStorage.getItem('token'),
          "patronId": localStorage.getItem('patronID')
      }
    }
    this.shareddata.loader(true);
    this.services.verifyVideoKYC(obj).subscribe((data:any)=>{
    
      // this.KYCmatchValue = data.result.videoVerification.videoFaceMatch[0].matchStatistics;
      // this.KYCVideo = data.result.videoVerification.video;
      // console.log("KYC MATCH VALUE",this.KYCmatchValue)
      // this.stringTOnum(this.KYCmatchValue.matchPercentage);
      
    
      
    })
  
}
kycData:any=[]
verifyVideoKYC(): Observable<any> {
  this.shareddata.loader(true);
  let obj = {
    "task": "getData",
    "essentials": {
      "token": localStorage.getItem('token'),
      "patronId": localStorage.getItem('patronID')
    }
  };
  
  this.shareddata.loader(true);


console.log("this.kycData",this.services.verifyVideoKYC(obj))
  // this.KYCmatchValue = this.kycData.result.videoVerification.videoFaceMatch[0].matchStatistics;
  // this.KYCVideo = this.kycData.result.videoVerification.video;
  // console.log("KYC MATCH VALUE",this.KYCmatchValue)
  // this.stringTOnum(this.KYCmatchValue.matchPercentage);


  return this.services.verifyVideoKYC(obj);
}

stringTOnum(val:any){
  this.shareddata.loader(true);
  
  let numericValue = null;
console.log("val",val)
if (typeof val === 'string') {
  const regex = /^([\d.]+)/; // Regular expression to extract numeric value
  const matches = val.match(regex);
console.log("matches",matches)
  if (matches && matches.length > 0) {
    numericValue = parseFloat(matches[0]);
    console.log("numericValue",numericValue)
    if( numericValue > 50){
      this.isNextButtonDisabled = false;
      this.naviagte()
        this.getLoader()
        this.shareddata.loader(false);
        this.uploadVideoDB();
      }
      else {
        this.toastrService.error('Video KYC did not match! Please try again!!', 'Error!');
        this.shareddata.loader(false);
        this.videoButton=false;
      }
  }
}
}

naviagte(){
  
  // swal.fire('Congratulations!', 'Your Profile has been uploaded and is under verification. You can Re-Login after ! Hour!!!'),
  this.rout.navigate(['/onboading-kyc/esign']);

}

getLoader()
    {
        let obj={
      level:"videod",
      value:true
    };
    this.shareddata.toggleClassValue(5)
 

    }


}
