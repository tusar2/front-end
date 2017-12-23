import { Student } from './../../interface/student';
import { DataService } from './../../service/data/data.service';
import { Component, OnInit } from '@angular/core';
import { HttpErrorResponse} from '@angular/common/http'
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


  student: any = {
    id: null,
    name: ''
  }
  students: Student[]

  constructor(private _dataService: DataService, private _router: Router) { }

  ngOnInit() {


    this._dataService.getAllStudents().subscribe(

      data => {
        this.students = <any>data
      },

       (err: HttpErrorResponse) => {
         if(err.status == 401){
            this._router.navigate(['/login'])
         }else{
          console.log(err)
         }
        
      }

    )
  }

  add(){
    this._dataService.createStudent(this.student).subscribe(
      
            data => {
              this.students.push(data)
            },
      
             (err: HttpErrorResponse) => {
               if(err.status == 401){
                  this._router.navigate(['/login'])
               }else{
                console.log(err)
               }
              
            }
      
          )
  }

}