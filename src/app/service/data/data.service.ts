import { Cookie } from 'ng2-cookies';
import { Router } from '@angular/router';
import { UserService } from './../user/user.service';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Student} from '../../interface/student'

@Injectable()
export class DataService {

  constructor(private _http: HttpClient, private _userService: UserService, 
  private _router: Router) { }

  getAllStudents(){    

    if(this._userService.checkLoggedIn()){
      const httpOptions = {
        headers: new HttpHeaders({ 'Authorization': 'Bearer '+Cookie.get('access_token'), 
        'Content-type': 'application/x-www-form-urlencoded; charset=utf-8' }, )
      };
      return this._http.get<Student>('api/student/getAll', httpOptions)
    }else{
      this._router.navigate(['/login'])
    }
  }


  createStudent(student: Student){
    if(this._userService.checkLoggedIn()){
      const httpOptions = {
        headers: new HttpHeaders({ 'Authorization': 'Bearer '+Cookie.get('access_token'), 
        'Content-type': 'application/json' }, )
      };
      return this._http.post<Student>('api/student/create', student,httpOptions)
    }else{
      this._router.navigate(['/login'])
    }
  }

}
