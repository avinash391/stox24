import { Component } from '@angular/core';
import { ApiDataService } from 'src/app/services/dataservice/api-data.service';
import { GlobalService } from 'src/app/services/global.service';
import{SharedDataService} from "../../../services/sharedData/shared-data.service";
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import {ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

import { HttpClient, HttpHeaders } from '@angular/common/http';
@Component({
  selector: 'app-pan-varify',
  templateUrl: './pan-varify.component.html',
  styleUrls: ['./pan-varify.component.scss']
})
export class PanVarifyComponent {
  // signUpForm: any = FormGroup;
  veryFy: any = FormGroup;
  veryFyPenNo: any = FormGroup;
  tab1: any = false;
  submitted: any;
  veryPenNo: any;
  veryOtp: any;
  PANimg: any="";
  fileError: any ="";
  panError: any;
  isNextButtonDisabled: boolean = true;
  itemId: any;
  panObj: any = [];
  extPAN:any = [];
  panNumber: any;
  name: any;
  fatherName: any;
  showInputTags: boolean=false;
  showpanCard:boolean=false;
  showpdf: boolean = true;
  selectedFile: any;
  pdfUrl: any;
  pdfUrlpath: any;

  uploadImgCont:boolean=false;


  // private constructor
  
  constructor(private formBuilder: FormBuilder, 
              private sharedData:SharedDataService,
             private services: ApiDataService,
             private globalService: GlobalService,
             private router: Router,
             private http: HttpClient,
             private toastrService: ToastrService) { }



  get f2() { return this.veryFyPenNo.controls; }

  // ngOnInit for verify pan  
  ngOnInit(): void {
    this.veryFyPenNo = this.formBuilder.group({
      penNo: ['', [Validators.required]],
      pandob:['', Validators.required],
      fname:['',[Validators.required]]
    });

  //   const savedPANimg = sessionStorage.getItem('PANimg');
  // if (savedPANimg) {
  //   this.PANimg = savedPANimg;
  // }

  }

  onFileSelected12(event: any): void{
    this.fileError = '';
    console.log("eventeventeventevent" ,event)
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


// own data

      const token = localStorage.getItem('token');

      // Create HttpHeaders with the token
      const headers = new HttpHeaders({
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json', // Adjust content type as needed
      });
      this.services.UpdateProfile(data, headers).subscribe((response: any) => {
console.log(response,"response data ");      });








      this.http.post('https://v7.traderscabinet.com/assets/PHP/alfa/v1/common/UploadDipositPaymentReceipt', data)
          .subscribe((response: any) => {
            console.log(response);
            this.sharedData.loader(false);
            if (file.type.includes('image')) {
              // Handle image file
              this.PANimg = response?.resp.url;


              this.panIdentity(1);
            } else {
             this.PANimg = response?.resp.url;
              this.showpdf = false;
              this.panIdentity(1);
              // this.toastrService.success('PDF file uploaded.', 'PDF Uploaded!');
            }
          },((error:any)=>{
            this.sharedData.loader(false);
            this.toastrService.error('Your PAN Card is not uploaded.', 'Failed!');
            // this.toastrService.warning('Unsupported file format.', 'File Upload');
          }));
            // this.sharedData.loader(false);

            // sessionStorage.setItem('PANimg', this.PANimg);

            // this.panIdentity();

    }

  }

// pan upload 

  onFileSelected(event: any): void {
    this.removePDF();
    this.selectedFile = event.target.files[0];
    if (this.selectedFile) {
      const reader = new FileReader();
      reader.onload = (e: any) => {
        this.pdfUrl = e.target.result;
      };
      reader.readAsDataURL(this.selectedFile);
      this.uploadFile();
    } else {
      this.pdfUrl = null;
    }
  }


  uploadFile(): void {


    if (this.selectedFile) {
      const formData: FormData = new FormData();
      formData.append('file', this.selectedFile, this.selectedFile.name);
      formData.append('ttl', 'infinity');
      console.log(this.selectedFile)

      this.http.post('https://persist.signzy.tech/api/files/upload', formData).subscribe(
        (response:any) => {


          if(response.file.filetype=="application/pdf"){
            this.pdfUrlpath= response.file.directURL;
            // console.log('responseresponseresponseresponse' ,response.file.directURL)
            this.panIdentity(this.pdfUrlpath);
            this.PANdoc=this.pdfUrlpath;
            this.uploadImgCont=true;

            localStorage.setItem('PANimg', this.pdfUrlpath);



            localStorage.setItem('PANimg', this.pdfUrlpath);
          }else{
            this.PANimg = response.file.directURL;
            this.panIdentity(this.PANimg);
            this.PANdoc=this.PANimg
            // this.uploadPANdb(this.PANimg,1);
            this.uploadImgCont=false;
            localStorage.setItem('PANimg', this.PANimg);

          }
        },
        (error) => {
          this.toastrService.error('Something went Wrong!!!. Please try again.','Error!')
          console.error('Error uploading file:', error);
        }
      );
    }
  }

  removePDF(){
    this.uploadImgCont=false;
    this.PANimg='';
  }









// panidentify function
  panIdentity(val:any) {
    let obj =  {
      "type": "individualPan",
      "email": "rajeev.verma@marketwicks.com",
      "callbackUrl": "https://crm.traderscabinet.com/callback",
      "images": [
        val
      ]
    }
    this.sharedData.loader(true);
    this.services.getPANidentity(obj).subscribe((data: any) => {
      console.log('datadatadata' ,data)
      if (data.id) {
        console.log("data.iddata.id", data.id),
          this.itemId = data.id

        this.panObj = {
          itemId: data.id,
          accessToken: data.accessToken
        }
        this.sharedData.loader(false);
        this.extractPANcard();

      }
    },(error)=>{
      this.toastrService.error('Something went Wrong!!!. Please try again.','Error!')
      this.sharedData.loader(false)
    });

  }
//extractPANcard
extractPANcard(){
  let obj =
  {
    "service":"Identity",
    "itemId":this.panObj.itemId,
    "task":"autoRecognition",
    "accessToken": this.panObj.accessToken,
    "essentials":{}
  }
    this.sharedData.loader(true);
    this.services.ExtractPANCARD(obj).subscribe((res:any)=>{



      console.log(res,"this is from pencard")

      let obj = {
        "personal_details": `{
          "name": "${res.response.result.name}",
          "dob": "${res.response.result.dob}",
          "fatherName": "${res.response.result.fatherName}",
          "number": "${res.response.result.number}",
          "panType": "${res.response.result.panType}"
        }`
        ,
        "pan_card": `${res.response.files[0]}`
      };

      const token = localStorage.getItem('token');

      // Create HttpHeaders with the token
      const headers = new HttpHeaders({
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json', // Adjust content type as needed
      });
      this.services.UpdateProfile(obj, headers).subscribe((response: any) => {
console.log(response,"response data ");      });






      this.extPAN={
        itemId: res.itemId,
        accessToken: res.accessToken
      }
      this.panNumber=res.response.result.number;
      localStorage.setItem('PAN',this.panNumber);
      this.name=res.response.result.name;
      this.fatherName=res.response.result.fatherName;
      this.sharedData.loader(false);
      this.showpanCard=true;
      this.showInputTags=true;
      this.PANCARDVerification();
      this.veryFyPenNo.setValue({
        penNo: this.panNumber,
        pandob: this.name,
        fname: this.fatherName,

      });

    },(error)=>{

      this.toastrService.error('Your PAN Card extraction is failed. Please try again.','Error!!')
      this.sharedData.loader(false)
    })
}
PANdoc= ""

// panvarification
PANCARDVerification(){
  let obj =
  {
    "service":"Identity",
    "itemId":this.panObj.itemId,
    "task":"verification",
    "accessToken":this.panObj.accessToken,
    "essentials":{
      "number":this.panNumber,
      "name":this.name,
      "fuzzy":"false",
      "panStatus": "true"
      }
  }
  this.sharedData.loader(true);
  this.services.VerifyPANCard(obj).subscribe((data:any)=>
  {
    console.log("datadatadatadata",data)
    if(data.response.result.panStatus=="VALID"){
          this.sharedData.loader(false);
          // let val = 2;
          this.uploadPANdb(this.PANdoc, 1);
          this.isNextButtonDisabled=false;



        }
        else {
          this.uploadPANdb('',0)
        }


  },(error)=>{

    this.toastrService.error('Your PAN Card verification is failed. Please try again.','Error!!')
    this.sharedData.loader(false)
  })
  }

uploadPANdb(val:any,val1:any){
  let obj= {
    "Path":val,
    "Details":"",
    "oStage":val1,
    "oKYC_DOC":{
        "ProfileId":localStorage.getItem('ProfileID'),
        "oKYC_Type":1,
        "oStatus":2
    },
    "Key":""
  }
  // console.log(sessionStorage.getItem('ProfileID'))
  this.services.UPLOAD_KYC_DOC(obj).subscribe((data:any)=>{
    console.log(data)

    this.toastrService.success('Your PAN Card verification is complete.')
    this.statusCheck = 1;
  },(error)=>{

    this.toastrService.error('Your PAN Card verification is failed. Please try again.','Error!!')
    this.sharedData.loader(false)
  })
}
statusCheck: any;



  navigate(){
    this.sharedData.toggleClassValue(1);
    this.router.navigate(['/onboading-kyc/adhar-verify']);


  }
  onInput(event: any): void {
    const input = event.target.value;
    const maxLength = 12;
    event.target.value = input.replace(/[e]/gi, '');
  if (input.length > maxLength) {
    event.target.value = input.slice(0, maxLength);
  }

  }


}
