import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Designation } from 'src/app/shared/data.model';
import { DataService } from 'src/app/shared/data.service';
import { HttpServiceService } from 'src/app/shared/service/http-service.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-designation',
  templateUrl: './designation.component.html',
  styleUrls: ['./designation.component.css']
})
export class DesignationComponent implements OnInit {

  designation: any
  constructor(private data: DataService,
    private router: Router,
    private httpService:HttpServiceService) {
      this.httpService.getDesignation().subscribe((data:any)=>{
        this.designation=data.Designation
      })
     }

  ngOnInit(): void {

  }
  adddesignation() {
    this.router.navigate(['/dashboard/system-configuration/designation/add'])
  }

  delete(id:string){

    Swal.fire({
      title: 'Do you want to delete Designation?',
      showDenyButton: true,
      // showCancelButton: true,
      confirmButtonText: 'Delete',
      denyButtonText: `Cancel`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        this.httpService.deleteDesignation(id).subscribe(Data=>{
          Swal.fire('Designation Deleted Successfully!', '', 'success')
          location.reload();
        },err=>{
          location.reload();
          Swal.fire('Something went wrong!', '', 'error')
        })

      } else if (result.isDenied) {
        // Swal.fire('Changes are not saved', '', 'info')
      }
    })

  }
  edit(id:string){
    let url='/dashboard/system-configuration/designation/edit/'+id
    this.router.navigate([url])
  }

}
