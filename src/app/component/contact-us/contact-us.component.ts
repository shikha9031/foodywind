import { Component, OnInit } from '@angular/core';
import { CookingBackendService } from '../../service/cooking-backend.service';


@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})
export class ContactUsComponent implements OnInit {

  contactusObj = {
    name: '',
    email: '',
    message: ''
  };
  thankYouFlag:boolean = false;

  constructor(private _cookingBackend: CookingBackendService) { }

  ngOnInit() {}
  
  submitForm() {
    let data = { "name": this.contactusObj.name, "email": this.contactusObj.email, "message": this.contactusObj.message }
    this._cookingBackend.sendEmail(data).subscribe((res: any) => {
      if (res === 'OK') {
        this.clearFields();
        this.thankYouFlag = true;
      }
    }, error => {
      console.log(error);
      this.clearFields();
    })
  }

  clearFields() {
    this.contactusObj = {
      name: '',
      email: '',
      message: ''
    };
  }

}
