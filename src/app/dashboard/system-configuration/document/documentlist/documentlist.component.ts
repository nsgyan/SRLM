import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/shared/data.service';
import { HttpServiceService } from 'src/app/shared/service/http-service.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-documentlist',
  templateUrl: './documentlist.component.html',
  styleUrls: ['./documentlist.component.css']
})
export class DocumentlistComponent implements OnInit {

  Document: any
  constructor(private data: DataService,
    private router: Router,
    private httpService:HttpServiceService) {
      this.httpService.getDocument().subscribe((data:any)=>{
        this.Document=data.Document
      })
     }

  ngOnInit(): void {

  }
  addDocument() {
    this.router.navigate(['/dashboard/system-configuration/document/add'])
  }

  delete(id:string){

    Swal.fire({
      title: 'Do you want to delete Document?',
      showDenyButton: true,
      // showCancelButton: true,
      confirmButtonText: 'Delete',
      denyButtonText: `Cancel`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        this.httpService.deleteDocument(id).subscribe(Data=>{
          Swal.fire('Document Deleted Successfully!', '', 'success')
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
    let url='/dashboard/system-configuration/document/edit/'+id
    this.router.navigate([url])
  }

}
