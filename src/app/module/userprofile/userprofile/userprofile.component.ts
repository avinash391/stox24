import { Component,OnInit } from '@angular/core';
import { ApiDataService } from 'src/app/services/dataservice/api-data.service';
import { GlobalService } from 'src/app/services/global.service';
import{SharedDataService} from "../../../services/sharedData/shared-data.service";
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';

import swal from 'sweetalert2';
@Component({
  selector: 'app-userprofile',
  templateUrl: './userprofile.component.html',
  styleUrls: ['./userprofile.component.scss']
})
export class UserprofileComponent implements OnInit {
  personalForm: any = FormGroup;
  nomineeForm: any = FormGroup;
  passwordForm : any = FormGroup;
  email: any;
  first: any;
  last: any;
  accountName: any;
  accNumber: any;
  bankName: any;
  ifsc: any;
  maskedValue: any;
  userProfile: any ;
  receivedData: any;
  profileImg: any="";
  currentTab: any = "tab1";
  otpSent: boolean = false;
  successMsg : boolean = false;
  date: any;
  constructor(private formBuilder: FormBuilder,
    private sharedData:SharedDataService,
   private services: ApiDataService,
   private globalService: GlobalService,
   private router: Router,
   private apiDataService: ApiDataService,
   private http: HttpClient,private toastrService:ToastrService){

  }
  nvatabc (tab: any){
    this.currentTab = tab
  }

  ngOnInit(): void {

    this.apiDataService.getProfileInfo().subscribe((data: any) => {
      // Handle the response data here
      console.log(data,"now user profile data");
      this.userProfile =JSON.parse( data.data.user_profile.personal_details);
      console.log( this.userProfile ,"user profile data")
      // this.userProfile = JSON.parse(data.user_profile.personal_details);
    });


    this.passwordForm = this.formBuilder.group({
      newpass: ['', Validators.required],
      otp: ['', Validators.required, Validators.minLength(6),Validators.maxLength(6)],
    })
    this.personalForm = this.formBuilder.group({
      mobile: [''],
      email: [''],
      gender: [''],
      maritalStatus: [''],
      qualification: [''],
      occupation: [''],
      annualIncome: [''],
      stockMarketExp: [''],
      netWorth: [''],
      address: [''],

    });


    this.sharedData.selectedprofileValue.subscribe((data:any) => {
      console.log("datadatadatadatadat",data)
      this.receivedData = data;
      this.email=data.Email;
      this.first=data.First;
      this.last=data.Last;
      this.date=data.DOB;
      console.log("shared service", this.receivedData)
      if (data.oUserAddr) {
        this.personalForm.patchValue({
          dob: data.DOB,
          mobile: data.Phone,
          email: data.Email,
          address: data.oUserAddr.Address,

          // state: data.oUserAddr.State || '',
          // zipcode: data.oUserAddr.ZipCode || '',
          // country: data.oUserAddr.Country || '',
          // address: data.oUserAddr.Address || '',
          // city: data.oUserAddr.City || '',
        });

      }
    });
    this.nomineeForm = this.formBuilder.group({
      name: [''],
      relationship: [''],
      dateOfBirth: [''],
      panNumber: [''],
    })
    this.getPersonalDetails();
    this.getBankDetails();



  }
  onFileSelected(event: any): void{
    // this.fileError = '';
    console.log(event)
    const file: File = event.target.files[0];
    this.sharedData.loader(true);
    console.log(event.target.files)

    var reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {

      console.log('RESULT', reader.result);
      const data = {

        App: 'uploadReceit',
        oData: reader.result

      };


      this.http.post('https://v7.traderscabinet.com/assets/PHP/alfa/v1/common/UploadDipositPaymentReceipt', data)
          .subscribe((response: any) => {
            console.log(response);
            this.sharedData.loader(false);
            if (file.type.includes('image')) {
              // Handle image file
              this.profileImg = response?.resp.url;




              // this.toastrService.success('PDF file uploaded.', 'PDF Uploaded!');
            }
          },((error:any)=>{
            this.sharedData.loader(false);
            // this.toastrService.error('Your PAN Card is not uploaded.', 'Failed!');
            // this.toastrService.warning('Unsupported file format.', 'File Upload');
          }));
            // this.sharedData.loader(false);

            // sessionStorage.setItem('PANimg', this.PANimg);

            // this.panIdentity();

    }

  }
getPersonalDetails(){
  let obj = {
    Key:'',
    ProfileId: localStorage.getItem('ProfileID')
  }
  this.services.GET_USER_PERSONAL_INFO(obj).subscribe((data:any)=>{
    console.log("userProfile",data);
    if(data){
    this.personalForm.patchValue({

      gender: data.GenderID,
      maritalStatus: data.MartialID,
      qualification: data.EducationID,
      occupation: data.OccupationID,
      annualIncome: data.AnnualID,
      stockMarketExp: data.ExpID,
      netWorth: data.Worth,


    });
    this.nomineeForm.patchValue({

      name: data.NominationName,
      relationship:data.NomineeRelationId,
      dateOfBirth:data.NomineeDOB,
      panNumber:data.NominationPan
    });
  }
  })
}


getBankDetails(){
  let obj={
    Key:'',
    Profile:localStorage.getItem('ProfileID'),
  }
  this.services.GET_USER_BANK(obj).subscribe((res:any)=>{
    console.log(res);
    this.accountName=res.AccountName;
    this.accNumber=res.AccountNo;
    this.bankName=res.BankName;
    this.ifsc=res.IFSC;
    const visibleDigits = 3;
    this.maskedValue = this.accNumber.substr(0, visibleDigits) + '*'.repeat(this.accNumber.length - 2 * visibleDigits) + this.accNumber.substr(this.accNumber.length - visibleDigits);
  },

  (error: any) => {
    console.error('An error occurred:', error);
    this.toastrService.error('Something went Wrong!!!. Please try again.','Error!')
  }
)

}

GENERATE_OTP(){
  let obj = {

      "ProfileId":localStorage.getItem('ProfileID'),
      "Type":1,
      "Source":2,
      "Code":""

  }
  this.services.GENERATE_OTP(obj).subscribe((data:any)=>{
    console.log("change password OTP generated",data);
    if(data.Result== true){
      this.otpSent = true;
      this.toastrService.success('OTP has been sent to your registered Email !', 'Please check!');
    }
    else {
      this.otpSent = false;
      this.toastrService.error('Something Went Wrong!', 'Please try again.')
    }
  })
}
keyPressAlphaNumeric(event:any) {

  var inp = String.fromCharCode(event.keyCode);

  if (/[a-zA-Z]/.test(inp)) {
    return true;
    // this.strinput=false
  } else {
    // this.strinput=true
    event.preventDefault();
    return false;
  }
}

changePassword(){
  let obj = {
    Key:"",
    ProfileId: localStorage.getItem('ProfileID'),
    Value:this.passwordForm.value.newpass,
    Verify_Code:this.passwordForm.value.otp,
    Type:1
  }
  this.services.MAKE_CLNT_CHANGE_PWD(obj).subscribe((data:any)=>{
    console.log("change password api RESULT", data)
    if(data.Result== true){
      // this.successMsg = true;
      this.otpSent = false;
      this.passwordForm.reset();
      swal.fire('Congrats!', 'Your Password has been changed successfully.'),
      this.toastrService.success('Your Password has been changed successfully!', 'Congrats!');
    }
    else {
      this.toastrService.error('Please enter Valid OTP.', 'Invalid OTP!')
    }
  })
}



}
