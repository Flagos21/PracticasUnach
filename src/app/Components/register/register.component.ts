import { Component, ElementRef, Renderer2 } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/Services/auth.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent{

  formLogin: FormGroup;
  formReg: FormGroup;
  errorMessage: string = '';
  successMessage: string = '';

  constructor(
    private authService: AuthService,
    private router: Router,
    private renderer: Renderer2,
    private el: ElementRef
  ) {
    this.formLogin = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', Validators.required)
    });

    this.formReg = new FormGroup({
      nombre: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(6)]),
      perfil: new FormControl('usuario'),
    });
  }

  ngOnInit(): void {
    const signUpButton = this.el.nativeElement.querySelector('#signUp');
    const signInButton = this.el.nativeElement.querySelector('#signIn');
    const container = this.el.nativeElement.querySelector('#container');

    signUpButton.addEventListener('click', () =>
      this.renderer.addClass(container, 'right-panel-active'));

    signInButton.addEventListener('click', () =>
      this.renderer.removeClass(container, 'right-panel-active'));
  }

  onSubmitLogin() {
    this.authService.login(this.formLogin.value)
      .then(response => {
        console.log(response);
        this.router.navigate(['/home']);
      })
      .catch(error => console.log(error));
  }

  async onSubmitRegister() {
    try {
      const userCredential = await this.authService.registerAndAddUser(this.formReg.value);

      this.successMessage = 'Usuario registrado con éxito.';

      console.log('Usuario registrado con éxito. UID:', userCredential.user.uid);
      
    } catch (error: any) {
      console.error('Error al registrar usuario:', error);

      if (error.code === 'auth/email-already-in-use') {
        this.errorMessage = 'El correo electrónico ya está en uso. Por favor, utiliza otro correo electrónico.';
      } else {
        this.errorMessage = 'Hubo un error al registrar al usuario. Por favor, inténtalo de nuevo más tarde.';
      }
    }
  }
}

