import { Component, OnInit, TemplateRef  } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiDataService } from 'src/app/services/dataservice/api-data.service';
import { GlobalService } from 'src/app/services/global.service';
import { LoginService } from 'src/app/services/login.service';
import { HttpClient } from '@angular/common/http';
import { SharedDataService } from 'src/app/services/sharedData/shared-data.service';
import { Options } from "@angular-slider/ngx-slider";
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-personal-detail',
  templateUrl: './personal-detail.component.html',
  styleUrls: ['./personal-detail.component.scss']
})
export class PersonalDetailComponent {
  myForm:any= FormGroup;
  modalForm:any= FormGroup;
  parsedJson: any;
  submitted: boolean = false;
  uid1: any
  formData: any
  checkPolicy:boolean = false;
  AddressDetails: any;
  modalRef:any = BsModalRef;
  checkDisable:boolean= true;
  value: any = 0;
  options: Options = {
    showTicksValues: true,
    stepsArray: [
      { value: 0, legend: 'L'},
      { value: 1, legend: 'L'},
      { value: 3, legend: 'L' },
      { value: 5, legend: 'L'},
      { value: 8, legend: 'L' },
      { value: 10, legend: 'L'},
      { value: 15, legend: 'L' },
      { value: 20, legend: 'L'},
      { value: 25, legend: 'L'},
      { value: 35, legend: 'L'},
      { value: 50, legend: 'L'}
    ]
  };
  value2: any = 0;
  options2: Options = {
    showTicksValues: true,
    stepsArray: [
      { value: 0},
      { value: 1},
      { value: 2 },
      { value: 3},
      { value: 4 },
      { value: 5},
      { value: 6 },
      { value: 7},
      { value: 8 },
      { value: 9}
    ]
  };
  annualIncomeControl = this.formBuilder.control(0, Validators.required);
  yearsOfExperienceControl = this.formBuilder.control(0, Validators.required);
  modalValues: any;
  get f() { return this.myForm.controls; }
  constructor(private formBuilder: FormBuilder, private router: Router,private toastrService: ToastrService, private sharedData:SharedDataService,private services:ApiDataService, private modalService: BsModalService ) { }

    openModal(template: TemplateRef<any>,ev:any) {
      // console.log("POPup Modal",ev.target.checked)
      if(ev.target.checked){
      this.modalRef = this.modalService.show(template);
    }
    
  }
  closeModal(){
    this.modalRef.hide();
    this.myForm.patchValue({
      addNomination:false
    })
  }
  ngOnInit(): void {
   
    this.myForm = this.formBuilder.group({
      gender: ['', Validators.required], 
      maritalstatus: ['', Validators.required],
      firstName: ['', [Validators.required,Validators.pattern('^[a-zA-Z\-\']+')]],
      // middleName: ['', Validators.required],
      lastName: ['', Validators.required],
      eduQ: ['', Validators.required],
      occupation: ['', Validators.required],
      annualIncome: this.annualIncomeControl,
      yearsOfExperience: this.yearsOfExperienceControl,
      // annualIncome: ['', Validators.required], 
      // yearsOfExperience: ['', Validators.required],
      // addNomination: [''], 
      portfolio:['', Validators.required],
      checkPolicy1: [false, Validators.requiredTrue], 
      checkPolicy2: [false, Validators.requiredTrue], 
      
      
    });
    this.myForm.valueChanges.subscribe((value:any) => {
      console.log("this.myForm.valueChanges", value)
      this.checkDisable = this.myForm.valid;
    });

    this.modalForm = this.formBuilder.group({
      name:['', Validators.required],
      relationship: [0,Validators.required],
      dob: ['', Validators.required],
      pan: ['',Validators.required],
    });
  

  
   
  

    this.sharedData.toggleClassValue(2);
    
  }
  onFieldBlur(fieldName: string) {
    const field = this.myForm.get(fieldName);
    if (field) {
      field.markAsTouched();
    }
  }

  modalSubmit(){
    if (this.modalForm.valid){
      const newModalObject = Object.assign({}, this.modalValues, this.modalForm.value);
      this.modalValues = newModalObject;
      console.log("this.modalValues", this.modalValues);
    
      this.modalService.hide();
  }
}
keyPressAlphaNumeric(event:any) {

  var inp = String.fromCharCode(event.keyCode);

  if (/[a-zA-Z\s]/.test(inp)) {
    return true;
    // this.strinput=false
  } else {
    // this.strinput=true
    event.preventDefault();
    return false;
  }
}
  onAnnualIncomeChange(event: any) {
    this.value = event.value;
    this.myForm.patchValue({
      annualIncome:this.value
    })
    console.log("this.value",this.myForm.value.annualIncome)
  }

  // Event handler for ngx-slider 'userChange' event for Years of Experience
  onYearsOfExperienceChange(event: any) {
    this.value2 = event.value;
    this.myForm.patchValue({
      yearsOfExperience:this.value2
    })
    console.log("this.value2",this.myForm.value.yearsOfExperience)
  }
  createForm(){
    const formData = this.myForm.value;
    const modData = this.modalForm.value;
    this.submitted = true;
  //  console.log("ANnual income", formData.annualIncome)
  //  console.log("yearsOfExperience", formData.yearsOfExperience)
   console.log("myForm Values", formData)
   let obj = {
    Key:"",
    ProfileId : localStorage.getItem('ProfileID'),
    GenderID : formData.gender,
    MartialID : formData.maritalstatus,
    EducationID : formData.eduQ,
    OccupationID: formData.occupation,
    AnnualID: formData.annualIncome,
    ExpID: formData.yearsOfExperience,
    Worth: formData.portfolio,
    NominationName : modData.name,
    NominationEmail: "",
    NominationPan: modData.pan,
    NominationAdhar : "",
    NomineeRelationId : modData.relationship,
    NomineeDOB: modData.dob
   }
   this.sharedData.loader(true);
   this.services.ADD_SIGNUP_PERSONAL(obj).subscribe((data:any)=>{
    console.log("Personal Details",data)
    if(data.Result==true){
      this.toastrService.success(data.MSG_USER, 'Congratulations!!');
      this.navigate();
      this.sharedData.loader(false);
    }
    else{
      this.toastrService.error('Something went Wrong.', 'Please Try again!');
      this.sharedData.loader(false);
    }
   })
    
    
  }
  
  navigate(){
  
      this.router.navigate(['/onboading-kyc/bank-detail']);
      let obj={
        level:"personaldet",
        value:true
      }
      this.sharedData.toggleClassValue(3);
  }




  valueCheck(event: any) {
 
    this.myForm.value.checkPolicy1=event.target.checked;
    // console.log("this.myForm.value.checkPolicy1",this.myForm.value.checkPolicy1)


  }
  valueCheck1(event: any) {
 
    this.myForm.value.checkPolicy2=event.target.checked;
    // console.log("this.myForm.value.checkPolicy2",this.myForm.value.checkPolicy2)


  }
  radioCheck(ev:any,val:any){
    if(val== 'gender'){
console.log("radiocheck",ev.target.value)
this.myForm.value.gender=ev.target.value
    }
    else {
      console.log("status",ev.target.value)
      this.myForm.value.maritalstatus=ev.target.value
    }
  }
  // maritalCheck(ev:any){
  //   this.myForm.value.maritalstatus=ev.target.value
  // }
  

getAddressDetails(){
  let params = {
    key: '',
    Profile: localStorage.getItem('ProfileID'),
  }
  this.services.GET_USER_INFO(params).subscribe((data:any)=>{
    // console.log(data);
   console.log(data)
    // this.myForm.setValue({
    //   dob:  data.DOB,
    //   addressLine1: data.oUserAddr.Address,
    //   pincode:data.oUserAddr.ZipCode,
    //   city: data.oUserAddr.City,
    //   state: data.oUserAddr.State,
    //   country: data.oUserAddr.Country,
    //  checkPolicy:false
    // });
    console.log("Adress Details",this.AddressDetails)
  })
}



  }

