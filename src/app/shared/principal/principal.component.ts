import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/users.service';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.scss']
})
export class PrincipalComponent implements OnInit {

  constructor(private apiService: UserService) { }

  ngOnInit(): void {
  }

  logout() {
    this.apiService.logout();
  }
}
