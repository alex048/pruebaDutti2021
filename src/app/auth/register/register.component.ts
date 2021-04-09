import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/users.service';

// JSON
import usersList from 'src/assets/json/users.json';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup;
  dataLoading: boolean = false;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private apiService: UserService
  ) { }

  ngOnInit(): void {
    this.registerForm = this.fb.group({
      first_name: ['', [Validators.required, Validators.minLength(3)]],
      last_name: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.minLength(6)]],
      password: ['', [Validators.required, Validators.minLength(6)]],

    })
  }

  registerUser() {
    if (this.registerForm.invalid) { return }
    // TODO : Falta integrar el servicio para registrar al usuario

    // JSON simulando usuarios  // var userLogin = this.registerForm.value;  //usersList.push(userLogin)//console.log('User Register -->', usersList)
    //SERVICE REGISTER USER
    this.apiService.createUsers(this.registerForm.value).subscribe(response => {
      console.log('registro exitoso', response);
      this.router.navigate(['/pages/ships'])
    }, (err) => {
      Swal.fire('Error', err.error.msg, 'error');
      console.warn(err.error.msg);
    })


  }

}
