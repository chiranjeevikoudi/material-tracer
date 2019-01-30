import {Component, OnInit} from '@angular/core';
import {ClientService} from '../client.service';

declare let $;

@Component({
  selector: 'app-manufacturer',
  templateUrl: './manufacturer.component.html',
  styleUrls: ['./manufacturer.component.css']
})
export class ManufacturerComponent implements OnInit {

  userLoggedIn = false;
  user;
  constructor(private clientService: ClientService) {
  }

  ngOnInit() {
    this.checkUserDetails();
    this.listenForNavigation();
  }

  logout(): void {
    this.clientService.logout();
  }

  checkUserDetails(): void {
    if (this.clientService.isUserLogin()) {
      this.userLoggedIn = true;
      this.user = this.clientService.getUserDetails();
      // console.log('logged in');

    } else {
      // console.log('not logged in');
      this.clientService.redirectToHome();
    }
  }

  listenForNavigation(): void {
    $(".list-group li").on("click", function () {
      $(".list-group li").removeClass("active text-white");
      $(".list-group li > a").removeClass("text-white");
      $(this).addClass("active");
      $(this).find("a").addClass("text-white");
    });
  }
}
