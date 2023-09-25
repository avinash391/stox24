import { HttpClient } from '@angular/common/http';
import { Component,ViewChild, AfterViewInit  } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { ApiDataService } from 'src/app/services/dataservice/api-data.service';
import { SharedDataService } from 'src/app/services/sharedData/shared-data.service';
import swal from 'sweetalert2';
import { Router } from '@angular/router';
import { NgSignaturePadOptions, SignaturePadComponent } from '@almothafar/angular-signature-pad';
@Component({
  selector: 'app-e-sign',
  templateUrl: './e-sign.component.html',
  styleUrls: ['./e-sign.component.scss']
})
export class ESignComponent {
 
  Esignimg:any="";
  fileError: any;
  showEsign:boolean=true;
  isImageUploaded: boolean=false;
  isCheckboxChecked: boolean = false;
  selectedFile: File | null = null;
  pdfUrl: any;
  hide:boolean = true
  pdfUrlpath: any='';
  constructor(private sharedData:SharedDataService, private http: HttpClient, private toastrService: ToastrService, private services:ApiDataService, private rout:Router){}

  @ViewChild('signature')
  public signaturePad!: SignaturePadComponent;

  public signaturePadOptions: NgSignaturePadOptions = { // passed through to szimek/signature_pad constructor
    minWidth: 5,
    canvasWidth: 300,
    canvasHeight: 175
  };
  ngAfterViewInit() {
    // this.signaturePad is now available
    this.signaturePad.set('minWidth', 5); // set szimek/signature_pad options at runtime
    this.signaturePad.clear(); // invoke functions from szimek/signature_pad API
  }
  ngOnInit(): void {

    this.sharedData.toggleClassValue(5);

  }
  clear(){
    this.signaturePad.clear();
  }

  drawComplete(event: MouseEvent | Touch) {
    // will be notified of szimek/signature_pad's onEnd event
    console.log('Completed drawing', event);
    console.log(this.signaturePad.toDataURL());
   
  }
  save(){
    this.uploadBase64(this.signaturePad.toDataURL());
    
  }

  drawStart(event: MouseEvent | Touch) {
    // will be notified of szimek/signature_pad's onBegin event
    console.log('Start drawing', event);
  }
  uploadBase64(val:any){
   
    let obj={
     App: 'uploadReceit',
         oData: val
    }
       this.sharedData.loader(true);
       this.http.post('https://client.abbottwealth.in/assets/PHP/alfa/v1/common/UploadDipositPaymentReceipt', obj)
           .subscribe((response: any) => {
             console.log(response);
             if(response.Result==true){
               
               this.isImageUploaded=true;
             
               this.uploadESigndb(response.resp.url);
             }
            else{
             this.sharedData.loader(false);
             this.toastrService.error('Your E Sign is not uploaded.', 'Please try again!');
            }
           
           },((error:any)=>{
             this.sharedData.loader(false);
             this.toastrService.error('Your E Sign is not uploaded.', 'Please try again!');
             
           }));
            
           
     
 
   }

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
  
  uploadImgCont:boolean=false;
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
            
            this.uploadESigndb(this.pdfUrlpath);
           
           
            this.isImageUploaded = true;
            
            this.uploadImgCont=true;

          }else{
            this.Esignimg=response.file.directURL;
            this.uploadESigndb(this.Esignimg);
            this.uploadImgCont=false;
            this.isImageUploaded = true;
           
          }


        },
        (error) => {
          // Handle upload error
          console.error('Error uploading file:', error);
        }
      );
    }
  }
  removePDF(){
    this.uploadImgCont=false;
    
    this.Esignimg='';
  }

  uploadESigndb(val:any){
    let obj= {
      "Path": val,
      "Details":"",
      "oStage":6,
      "oKYC_DOC":{
          "ProfileId":localStorage.getItem('ProfileID'),
          "oKYC_Type":5,
          "oStatus":2
      },
      "Key":""
    }
    this.services.UPLOAD_KYC_DOC(obj).subscribe((data:any)=>{
      console.log(data)
      if(data.Result=true){
        this.sharedData.loader(false);
        this.toastrService.success('E-sign has been uploaded successfully.', 'Success!');
     
      }
      },(error)=>{
      
        this.toastrService.error('Something went Wrong!!!. Please try again.','Error!')
        this.sharedData.loader(false)
      });
  }
  navigate(){
    swal.fire('Congratulations!', 'Your Profile has been uploaded and is under verification. You can Re-Login after ! Hour!!!'),
    localStorage.clear();
sessionStorage.clear();
    this.rout.navigate(['/login']);

  
  }

  // onFileSelected12(event: any): void{
  //   this.fileError = '';
  //   console.log(event)
  //   const file: File = event.target.files[0];
  //   this.sharedData.loader(true);
  //   console.log(event.target.files)
    
  //   var reader = new FileReader();
  //   reader.readAsDataURL(file);
  //   reader.onload = () => {

  //     console.log('RESULT', reader.result);
  //     const data = {

  //       App: 'uploadReceit',
  //       oData: reader.result

  //     };
   
      
  //     this.http.post('https://v7.traderscabinet.com/assets/PHP/alfa/v1/common/UploadDipositPaymentReceipt', data)
  //         .subscribe((response: any) => {
  //           console.log(response);
  //           this.sharedData.loader(false);
  //           if (file.type.includes('image')) {
  //             // Handle image file
  //             this.Esignimg = response?.resp.url;
         
  //             // sessionStorage.setItem('Esignimg', this.Esignimg);
  //            this.showEsign=false;
  //            this.isImageUploaded = true;
  //           } else {
            
     
      
  //             this.Esignimg = response?.resp.url;
        
            
  //             // this.toastrService.success('PDF file uploaded.', 'PDF Uploaded!');
  //           } 
  //         },((error:any)=>{
  //           this.sharedData.loader(false);
  //           this.toastrService.error('Your E Signature is not uploaded.', 'Failed!');
  //           // this.toastrService.warning('Unsupported file format.', 'File Upload');
  //         }));
  //           // this.sharedData.loader(false);
           
  //           // sessionStorage.setItem('PANimg', this.PANimg);
            
         
          
  //   }

  // }

  onCheckboxChange(event: any): void {
    this.isCheckboxChecked = event.target.checked;
  }
  
  ngOnDestroy(): void {
   
     sessionStorage.clear();
     localStorage.clear();
      
    }
  
}
