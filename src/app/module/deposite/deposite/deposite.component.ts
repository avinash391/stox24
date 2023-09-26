import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiDataService } from 'src/app/services/dataservice/api-data.service';
import { GlobalService } from 'src/app/services/global.service';
import{SharedDataService} from "../../../services/sharedData/shared-data.service"
import { ToastrService } from 'ngx-toastr';
import swal from 'sweetalert2';
@Component({
  selector: 'app-bank-detail',
  templateUrl: './deposite.component.html',
  styleUrls: ['./deposite.component.scss']
})
export class DepositeDetails {
  ActivePoup: boolean = false



  openDepositePopup(){
     this.ActivePoup = true
  }
  closePopup(){
    this.ActivePoup = false
  }
  // valueKeypress(event : any){
  //   console.log('eventeventeventeventevent' ,event)

  // }
}

