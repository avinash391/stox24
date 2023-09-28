import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, map } from 'rxjs';
import { environment, environmentSecond } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiDataService {
  domain = environment.url;
  domainSecond = environmentSecond.url;
  constructor(private http: HttpClient, private router: Router)
  {

  }
  login(obj:any)
{
  return this.http.post(this.domain+'test', obj).pipe(map(res =>{return res}));
}
LOGIN_USER(obj:any){
  return this.http.post(this.domain +'LOGIN_USER', obj);
}
// own api for login
USER_LOGIN(obj:any){
  return this.http.post(this.domainSecond +'login', obj);
}

UpdateProfile(obj: any, headers: HttpHeaders) {
  const options = { headers };
  return this.http.post(this.domainSecond + 'create-profile', obj, options);
}




GET_USER_STAGE(obj:any){
  return this.http.post(this.domain + 'GET_USER_STAGE',obj )
}

GET_USER_KYC_INFO(obj:any){
  return this.http.post(this.domain + 'GET_USER_KYC_INFO',obj )
}

getPANidentity(obj:any){
  return this.http.post('https://signzy.tech/api/v2/patrons/626167c93868b81c8255d9bb/identities', obj,this.createAuthenticationHeaders()).pipe(map(res =>{return res}));
}
ExtractPANCARD(obj:any){
  return this.http.post('https://signzy.tech/api/v2/snoops',obj);
}
VerifyPANCard(obj:any){
  return this.http.post('https://signzy.tech/api/v2/snoops',obj);

}

veryFyPenCard(obj:any)
{
  return this.http.post('https://signzy.tech/api/v2/patrons/626167c93868b81c8255d9bb/panv2',obj, this.createAuthenticationHeaders()).pipe(map(res =>{return res}));
}


verifyBankAccount(obj:any){
  return this.http.post('https://signzy.tech/api/v2/patrons/626167c93868b81c8255d9bb/bankaccountverifications',obj, this.createAuthenticationHeaders()).pipe(map(res =>{return res}));
}

videoKYC(obj:any)
{

  return this.http.post('https://signzy.tech/api/v2/patrons/626167c93868b81c8255d9bb/videoiframes',obj, this.createAuthenticationHeaders()).pipe(map(res =>{return res}));
}

verifyVideoKYC(obj:any){
  return this.http.post<any>('https://signzy.tech/api/v2/patrons/626167c93868b81c8255d9bb/videoiframes',obj, this.createAuthenticationHeaders()).pipe(map(res =>{return res}));
}

createAuthenticationHeaders()
{



      let headers = new HttpHeaders({
        // 'Content-Type' : 'application/json; charset=utf-8',
        'Accept': 'application/json',
        'Authorization': `${'dxzZBE905Hea1pc7MLdQDYvKUSA0he1rhZRQt83WlwBdC7Xqla4MQPPqC3heaTKj'}`,
       });
       let options = {
          headers: headers
       }
       return options
     }

createDigilockerURL(obj:any){
  return this.http.post('https://signzy.tech/api/v2/patrons/626167c93868b81c8255d9bb/digilockers',obj, this.createAuthenticationHeaders()).pipe(map(res =>{return res}));
}

getDigiEAadhar(obj:any){
  return this.http.post('https://signzy.tech/api/v2/patrons/626167c93868b81c8255d9bb/digilockers',obj, this.createAuthenticationHeaders()).pipe(map(res =>{return res}));
}

getDigiDetails(obj:any){
  return this.http.post('https://signzy.tech/api/v2/patrons/626167c93868b81c8255d9bb/digilockers',obj, this.createAuthenticationHeaders()).pipe(map(res=>{return res}));
}
getDigiFiles(obj:any){
  return this.http.post('https://signzy.tech/api/v2/patrons/626167c93868b81c8255d9bb/digilockers',obj, this.createAuthenticationHeaders()).pipe(map(res=>{return res}));
}

// coment my deposite api

// getDeposite(obj :any ,headers : HttpHeaders){
//   const options = { headers };
//   return this.http.post('https://stox24.com/admin/api/create-deposit-request', obj , options)
// }


submitFormData(formData: FormData, token: string): Observable<any> {
  // Create HttpHeaders with the token
  const headers = new HttpHeaders({
    Authorization: `Bearer ${token}`,
  });

  // Adjust the API endpoint as needed
  const apiUrl = 'https://stox24.com/admin/api/create-deposit-request';

  // Send the HTTP POST request with headers and form data
  return this.http.post(apiUrl, formData, { headers });
}







getInvestment(){

  return this.http.get('https://stox24.com/admin/api/investment-summary')
}
// getTopLooser
getTopLooser(){
  return this.http.get('https://stox24.com/admin/api/top-loosers')
}
getTopgainers(){
  return this.http.get('https://stox24.com/admin/api/top-gainers')
}

dashboardSummary(headers : HttpHeaders){
  const options = { headers };
  return this.http.get('https://stox24.com/admin/api/dashboard-summary' ,options)
}

depositeRequest(headers : HttpHeaders){
  const options = { headers };
  return this.http.get('https://stox24.com/admin/api/list-deposit-requests' ,options)
}



SalaryDetails(headers : HttpHeaders){
  const options = { headers };
  return this.http.get('https://stox24.com/admin/api/list-salaries' ,options)
}


OrderHistory(headers : HttpHeaders){
  const options = { headers };
  return this.http.get('https://stox24admin.techbuyhelp.com/api/list-orders-history' ,options)
}




// 

getIFSCdetails(obj:any){
  return this.http.get('https://ifsc.razorpay.com/'+ obj.code)
}

makeSignUp(obj:any){
  return this.http.post(this.domain + 'MAKE_SIGNUP',obj);
}

makeRegister(obj:any){
  return this.http.post(this.domainSecond + 'register',obj);
}

GENERATE_OTP(obj:any){
  return this.http.post(this.domain + 'GENERATE_OTP',obj)
}
GET_PROFILE_OTP_VERIFY_STATUS(obj:any){
  return this.http.get(this.domain +'GET_PROFILE_OTP_VERIFY_STATUS?Profile='+obj.Profile);
}


// profile info by stox
getProfileInfo() {
  // Get the authorization token from local storage
  const token = localStorage.getItem('token');

  // Create HttpHeaders with the token
  const headers = new HttpHeaders({
    'Authorization': `Bearer ${token}`
    // Add other headers if needed
  });

  // Make the GET request with headers
  return this.http.get(`${this.domainSecond}profile`, { headers });
}

GET_USER_INFO(obj:any){
return this.http.get(this.domain + 'GET_USER_INFO?Key='+obj.key+ '&Profile=' + obj.Profile);
}
SEND_OTP_BY_EMAIL(obj:any){
  return this.http.post(this.domain + 'SEND_OTP_BY_EMAIL',obj);
}
SEND_OTP_BY_PHONE(obj:any){
  return this.http.post(this.domain + 'SEND_OTP_BY_PHONE',obj);
}
VERIFY_EMAIL_OTP(obj:any){
  return this.http.post(this.domain + 'VERIFY_EMAIL_OTP',obj);
}
VERIFY_PHONE_OTP(obj:any){
  return this.http.post(this.domain + 'VERIFY_PHONE_OTP',obj);
}
UPDATE_USER_VERIFY(obj:any){
  return this.http.get(this.domain + 'UPDATE_USER_VERIFY?Profile='+obj.ProfileId);
}
ADD_USER_BANK(obj:any)
{
  return this.http.post(this.domain+'ADD_USER_BANK', obj);
}
UPDATE_PROFILE_ADDR_DOB(obj:any){
  return this.http.post(this.domain+'UPDATE_PROFILE_ADDR_DOB', obj);
}
UPLOAD_KYC_DOC(obj:any){
  return this.http.post(this.domain+'UPLOAD_KYC_DOC', obj);
}
GET_USER_BANK(obj:any){
  return this.http.get(this.domain + 'GET_USER_BANK?Key='+obj.Key+ '&Profile='+obj.Profile)
}
ADD_SIGNUP_PERSONAL(obj:any){
  return this.http.post(this.domain + 'ADD_SIGNUP_PERSONAL',obj)
}
GET_USER_PERSONAL_INFO(obj:any){
  return this.http.post(this.domain + 'GET_USER_PERSONAL_INFO',obj)
}
MAKE_CLNT_RESET_PWD(obj:any){
  return this.http.post(this.domain + 'MAKE_CLNT_RESET_PWD',obj)
}
MAKE_CLNT_CHANGE_PWD(obj:any){
  return this.http.post(this.domain + 'MAKE_CLNT_CHANGE_PWD',obj)
}
GENERATE_USER_RESET(obj:any){
  return this.http.post(this.domain + 'GENERATE_USER_RESET',obj)
}
VALIDATE_USER_RESET(obj:any){
  return this.http.get(this.domain + 'VALIDATE_USER_RESET?ResetCode='+ obj)
}

}
