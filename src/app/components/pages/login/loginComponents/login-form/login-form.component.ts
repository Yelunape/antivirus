import { Component } from '@angular/core';
import { HttpLoginService } from '../../services/http-login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent {
  correo = ""
  contrasena = ""

  constructor(
    private httpLoginService: HttpLoginService,
    private router: Router
  ) { }

  login() {
    this.httpLoginService.authenticate(this.correo, this.contrasena).subscribe({
      next: (res: any) => {
        console.log(res);
        const token = res.token;
        sessionStorage.setItem("token", token);
        this.router.navigate(["/news"]);
      },
      error: (e: any) => {
        console.log("error al llamar", e);
      }
    });
  }
}
