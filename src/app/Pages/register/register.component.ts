import { Component, OnInit ,ViewChild, ElementRef, ViewEncapsulation } from '@angular/core';
import {FormBuilder, FormGroupDirective, FormControl, NgForm, FormGroup, PatternValidator, Validators,} from '@angular/forms';
import { ErrorStateMatcher, } from '@angular/material/core';
import {MatSnackBar} from '@angular/material/snack-bar';
import { MatSnackBarConfig} from '@angular/material/snack-bar';
import { UserService } from 'src/app/Services/user.service';

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const invalidCtrl = !! (control && control.invalid && control.parent?.dirty);
    const invalidParent =
     !!(control && control.parent && control.parent.invalid && control.parent.dirty 
       && control.parent.hasError('notSame'));

    return (
      invalidCtrl ||
       invalidParent);
  }
} 

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  matcher = new MyErrorStateMatcher();
  public isActive: boolean;
  public notSame: boolean;
  registerForm:FormGroup;
  public EmailTld: string = '@gmail.com';
  action: boolean = false;
  setAutoHide: boolean = false;
  autoHide: number = 10000;
  
  addExtraClass: boolean = false;
  myForm: any;
  service: any;
  constructor(private formBuilder:FormBuilder, 
    public snackBar: MatSnackBar,private userservices: UserService) { 
    
    this.registerForm = this.formBuilder.group(
      {
        firstName: new FormControl('', [Validators.required,
           Validators.pattern('^[A-Z][a-z]{2,}$')
          ] ,), 
        lastName: new FormControl('', [Validators.required, 
          Validators.pattern('^[A-Z][a-z]{2,}$')
        ],),
        email: new FormControl('', [Validators.required, 
          Validators.pattern('')
        ]),
        password:  new FormControl('', [Validators.required, 
          Validators.pattern('^(?=.{8,20}$)(?=.*[\\d])(?=.*[A-Z])[\\w]*[\\W][\\w]*$')
        ]),
        confirmPassword:  new FormControl('', [Validators.required
        ])
      },
      { validators: this.checkPasswords },
    );   
    this.isActive = true;
    this.notSame = false;
  } 
  openSnackBar(message: string, duration: number) {
    let config = new MatSnackBarConfig();
    if (duration != 0)
    {
      config.duration = duration; 
    }
    this.snackBar.open(message, undefined, config);
  }

 // get f() {return this.myForm.controls;}
  ngOnInit(): void {
    
  }

  
  //register = (registerForm: { firstName: any; lastName: any; email: any; password: any; }) => {
    register(){
    
    if(this.registerForm.valid){
      this.openSnackBar('Registering user...', 0);
      let reqData ={
        "firstName": this.registerForm.get('firstName')?.value,
        "lastName": this.registerForm.get('lastName')?.value,
        "email": this.registerForm.get('email')?.value+this.EmailTld,
        "password": this.registerForm.get('password')?.value
      }
      
      
      this.userservices.registeration(reqData).subscribe((data: any) => {
        console.log(data);
        this.snackBar.open("Registration Successful","Exit")
      })
      // this.userSevice.registerUser(reqData).subscribe(
      //   response => {
      //     console.log("register successfull", response);
      //     this.openSnackBar('Registration successful', 2000);      
      //   },
      //   error => {
      //     if(error['status'] == 0){
      //       this.openSnackBar('Registration failed: server offline', 2000,);
      //     }
      //     else{
      //       this.openSnackBar('Registration failed: '+error['error']['message'], 2000);
      //     }
      //   }
      //   );
    } 
  } 

  TogglePassword(){
    this.isActive = this.isActive ? false : true 
  }
  
 checkPasswords(group: FormGroup) {
  let pass = group.controls.password.value;
  let confirmPass = group.controls.confirmPassword.value;

  return pass === confirmPass ? null : { notSame: true }
}

}





