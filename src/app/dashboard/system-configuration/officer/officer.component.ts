import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Officer } from 'src/app/shared/data.model';
import { DataService } from 'src/app/shared/data.service';
import { HttpServiceService } from 'src/app/shared/service/http-service.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-officer',
  templateUrl: './officer.component.html',
  styleUrls: ['./officer.component.css']
})
export class OfficerComponent implements OnInit {

  officer: any
  constructor(private data: DataService,
    private router: Router,
    private httpService:HttpServiceService
    ) {
      this.httpService.getOfficer().subscribe((data:any)=>{
      this.officer=data.officer
      })
     }

  ngOnInit(): void {

  }
  addofficer() {
    this.router.navigate(['/dashboard/system-configuration/officer/add'])

 }
 deleteOfficer(id:string){
  Swal.fire({
    title: 'Do you want to delete Officer?',
    showDenyButton: true,
    // showCancelButton: true,
    confirmButtonText: 'Delete',
    denyButtonText: `Cancel`,
  }).then((result) => {
    /* Read more about isConfirmed, isDenied below */
    if (result.isConfirmed) {
      this.httpService.deleteOfficer(id).subscribe(Data=>{
        Swal.fire('Officer Deleted Successfully!', '', 'success')
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
 editOfficer(id:string){
  let url='/dashboard/system-configuration/officer/edit/'+id
  this.router.navigate([url])
 }
}
