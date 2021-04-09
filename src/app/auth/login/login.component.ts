import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/users.service';

// JSON
import usersList from 'src/assets/json/users.json';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  dataLoading: boolean = false;
  users: any = usersList;
  unregistered: boolean = false;
  invalid: boolean = false;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private apiService: UserService
  ) { }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.minLength(3)]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    })
  }
  loginUser() {

    if (this.loginForm.invalid) { return }
    this.loading();
    // TODO : Falta integrar el servicio para autentificar al usuario
    // JSON simulando usuarios
    /* var userLogin = this.loginForm.value.username;
     var filterJson = this.users.filter(function (user) { return user.first_name === userLogin });
     if (filterJson.length > 0) {
       this.router.navigate(['/pages/ships'])
     } else {
       this.unregistered = true;
     }*/
    this.apiService.login(this.loginForm.value).subscribe(response => {
      Swal.close();
      this.router.navigate(['/pages/ships']);
    }, err => {
      Swal.close();
      Swal.fire('Error', err.error.msg, 'error');
    });

  }

  loading() {
    Swal.fire({
      text: 'Validando ...',
      width: '200px',
      allowEscapeKey: false,
      allowOutsideClick: false,
      onOpen: () => {
        Swal.showLoading();
      },
    });
  }
}

