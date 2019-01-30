import {Injectable} from '@angular/core';
import {Client} from './client';
import {Observable, of} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class ClientService {
  apiBaseUrl = 'http://localhost:3000/api';

  constructor(private http: HttpClient, private router: Router) {
  }

  /*login(email, password):  Observable<Client> {
    return of({
      'id': 81,
      'token': 'GUANkBKVE7DZ2Hl19V80AhT9KQ9FJXFogwWli3KEppCbb8pZnRgK5U9NZ9RUzN1w',
      'userType': 'manufacturer',
      'name': 'Chiranjeevi'
    });
  }*/
  register(userRecord: object): Observable<any> {

    /*this.http.post (this.apiBaseUrl + 'register', userRecord).subscribe(res => {
      console.log(res);
    }, err => {
      console.log(err);

    });*/
    return this.http.post(this.apiBaseUrl + '/client/register', userRecord);
  }

  login(email: string, password: string): Observable<any> {
    return this.http.post(this.apiBaseUrl + '/client/login', {email: email, password: password});
  }

  redirectToClientHomePage(userInstance: any): void {
    if (this.setUserDetails(userInstance)) {
      if (userInstance.type === 'manufacturer') {
        this.router.navigate(['/manufacturer']);
      } else {
        // console.log('inside subscriber');
        this.router.navigate(['/supplier']);
      }
    } else {
      this.redirectToHome();
    }
  }

  redirectToLogin(): void {
    this.router.navigate(['/login']);
  }

  redirectToHome(): void {
    this.router.navigate(['/']);
  }

  redirectToUrl(url): void {
    // console.log('inside navigate');
    this.router.navigate([url]);
  }

  redirectToPageNotFound(): void {
    this.router.navigate(['/']);
  }

  setUserDetails(userInstance): boolean {
    this.clearUserDetails();
    if (userInstance.id && userInstance.userId && userInstance.type && userInstance.name) {
      localStorage.setItem('token', userInstance.id);
      localStorage.setItem('userId', userInstance.userId);
      localStorage.setItem('userType', userInstance.type);
      localStorage.setItem('userName', userInstance.name);
      return true;
    }
    return false;
  }

  clearUserDetails(): void {
    localStorage.clear();
  }

  checkUserLoginAndRedirect(): void {
    if (localStorage.getItem('token') && localStorage.getItem('userId') && localStorage.getItem('userType') && localStorage.getItem('userName')) {
      if (localStorage.getItem('userType') === 'manufacturer') {
        this.router.navigate(['/manufacturer']);
      } else if (localStorage.getItem('userType') === 'supplier') {
        this.router.navigate(['/supplier']);
      } else {
        this.clearUserDetails();
        this.router.navigate(['/']);
      }
    } else {
      this.clearUserDetails();
      this.router.navigate(['/']);
    }
  }

  isUserLogin(): boolean {
    // console.log(localStorage.getItem('token'), localStorage.getItem('userId'), localStorage.getItem('userType'), localStorage.getItem('userName'));
    if (localStorage.getItem('token') && localStorage.getItem('userId') && localStorage.getItem('userType') && localStorage.getItem('userName')) {
      return (localStorage.getItem('userType') === 'manufacturer' || localStorage.getItem('userType') === 'supplier');
    } else {
      return false;
    }
  }

  getUserDetails(): any {
    const userDetails: any = {
      token: localStorage.getItem('token'),
      userId: localStorage.getItem('userId'),
      userType: localStorage.getItem('userType'),
      name: localStorage.getItem('userName')
    };
    // console.log(userDetails)
    return userDetails;
  }

  logout(): void {
    this.clearUserDetails();
    this.redirectToHome();
  }

  getRequests(): any {
    const userToken = localStorage.getItem('token');
    if (!userToken) {
      this.clearUserDetails();
      this.redirectToHome();
    } else {
      return this.http.get(this.apiBaseUrl + '/requests?access_token=' + userToken);
    }
  }

  getRequestDetails(requestId): any {
    const userToken = localStorage.getItem('token');
    if (!userToken) {
      this.clearUserDetails();
      this.redirectToHome();
    } else {
      return this.http.get(this.apiBaseUrl + '/requests/byId?requestId=' + requestId + '&access_token=' + userToken);
    }
  }

  getRequestGraphMapGeoPoints(requestId): any {
    const userToken = localStorage.getItem('token');
    if (!userToken) {
      this.clearUserDetails();
      this.redirectToHome();
    } else {
      return this.http.get(this.apiBaseUrl + '/requests/graph/map/geopoints/byId?requestId=' + requestId + '&access_token=' + userToken);
    }
  }
  getRequestBOMDetails(requestId): any {
    const userToken = localStorage.getItem('token');
    if (!userToken) {
      this.clearUserDetails();
      this.redirectToHome();
    } else {
      return this.http.get(this.apiBaseUrl + '/requests/bom/byId?requestId=' + requestId + '&access_token=' + userToken);
    }
  }

  updateRequestStatus(requestId, status): Observable<any> {
    const userToken = localStorage.getItem('token');
    if (!userToken) {
      this.clearUserDetails();
      this.redirectToHome();
    } else {
      return this.http.post(this.apiBaseUrl + '/requests/update/status?access_token=' + userToken, {requestId: requestId, status: status});
    }
  }

  postRequest(requestData: object): Observable<any> {
    const userToken = localStorage.getItem('token');
    if (!userToken) {
      this.clearUserDetails();
      this.redirectToHome();
    } else {
      return this.http.post(this.apiBaseUrl + '/requests?access_token=' + userToken, requestData);
    }
  }

  getUserToken(): string {
    return localStorage.getItem('token');
  }

  updateRequestAttachment(requestId, attachmentName): Observable<any> {
    const userToken = localStorage.getItem('token');
    if (!userToken) {
      this.clearUserDetails();
      this.redirectToHome();
    } else {
      return this.http.post(this.apiBaseUrl + '/requests/update/attachment?access_token=' + userToken, {requestId: requestId, attachment: attachmentName});
    }
  }

  postRequestBOMDocument(requestBOMData: object): Observable<any> {
    const userToken = localStorage.getItem('token');
    if (!userToken) {
      this.clearUserDetails();
      this.redirectToHome();
    } else {
      return this.http.post(this.apiBaseUrl + '/requests/bom/document?access_token=' + userToken, requestBOMData);
    }
  }


}
