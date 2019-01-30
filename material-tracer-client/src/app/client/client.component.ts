import {Component, OnInit} from '@angular/core';
import {ClientService} from '../client.service';
import {Client} from '../client';
import {Router} from '@angular/router';
import {FormsModule} from '@angular/forms';


declare let google: any;
declare let $: any;

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent implements OnInit {
  userLoggedIn = false;
  showLoginForm = false;
  errorOccurred = false;
  errorMessage = false;
  showRegisterForm = false;
  userName;
  loggedInUser: Client;
  register_user_name;
  register_user_email;
  register_user_password;
  register_user_contact;
  register_user_address;
  register_user_type;
  register_user_geopoint;

  login_user_email;
  login_user_password;

  constructor(private clientService: ClientService, private router: Router) {
  }

  ngOnInit() {
    if (this.clientService.isUserLogin()) {
      this.clientService.checkUserLoginAndRedirect();
    } else {
      this.loginURLCheck();
    }
  }

  loginURLCheck(): void {
    if (this.router.url === '/login') {
      this.displayloginForm();
    } else if (this.router.url === '/register') {
      this.displayRegisterForm();
    }
  }

  redirectToLogin(): void {
    this.router.navigate(['/login']);
  }

  redirectToRegister(): void {
    this.router.navigate(['/register']);
  }

  isUserLoggedIn(): boolean {
    return false;
  }

  displayRegisterForm(): void {
    this.showLoginForm = false;
    this.showRegisterForm = true;
    this.initRegAddress();
  }

  displayloginForm(): void {
    this.showLoginForm = true;
    this.showRegisterForm = false;
  }

  login(): void {
    this.clientService.login(this.login_user_email, this.login_user_password).subscribe(res => {
      alert('login success');
      this.clientService.redirectToClientHomePage(res);
    }, err => {
      if (err && err.error && err.error.error && (err.error.error.statusCode === 422 || err.error.error.statusCode === 400)) {
        this.errorOccurred = true;
        this.errorMessage = err.error.error.message;
      } else {
        alert('Some internal error occurred');
      }
    });
  }

  registerUser(): void {
    /*console.log(this.register_user_name);
    console.log(this.register_user_email);
    console.log(this.register_user_password);
    console.log(this.register_user_contact);
    console.log(this.register_user_address);
    console.log(this.register_user_type);
    console.log(this.register_user_geopoint);
    console.log(typeof this.register_user_geopoint);
*/
    const userData = {
      'name': this.register_user_name,
      'email': this.register_user_email,
      'password': this.register_user_password,
      'contact': this.register_user_contact,
      'address': this.register_user_address,
      'type': this.register_user_type,
      'geopoint': this.register_user_geopoint
    };
    // console.log(userData);
    this.clientService.register(userData).subscribe(res => {
      alert('registration success');
      this.clientService.redirectToLogin();
    }, err => {

      if (err && err.error && err.error.error && err.error.error.statusCode === 422) {
        this.errorOccurred = true;
        this.errorMessage = err.error.error.message;
      } else {
        alert('Some internal error occurred');
        // this.clientService.redirectToHome();
      }
      // console.log( 'error occurred',err.error);
      // console.log( 'error occurred',err.error.error);
      // console.log( 'error occurred',err.error.error.name);
      // console.log( 'error occurred',err.error.error.message);
      // console.log(err);
    });
  }

  initRegAddress(): void {
    const input = document.getElementById('register_user_address');
    if (input) {
      const searchBox = new google.maps.places.SearchBox(input);
      searchBox.addListener('places_changed', () => {
        const places = searchBox.getPlaces();
        if (places.length === 0) {
          return;
        }
        places.forEach((place) => {
          if (!place.geometry) {
            return;
          } else {
            const user_geopoint = $('#register_user_geopoint');
            user_geopoint.val([place.geometry.location.lat(), place.geometry.location.lng()]);
            this.register_user_geopoint = [place.geometry.location.lat(), place.geometry.location.lng()];
            this.register_user_address = place.formatted_address;
          }
        });
      });
    } else {
      setTimeout(() => {
        this.initRegAddress();
      }, 1000);
    }
  }
}
