import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { VendorType } from 'src/app/shared/data.model';
import { DataService } from 'src/app/shared/data.service';
import { HttpServiceService } from 'src/app/shared/service/http-service.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-vendor-type',
  templateUrl: './vendor-type.component.html',
  styleUrls: ['./vendor-type.component.css']
})
export class VendorTypeComponent implements OnInit {
  vendorType!: any[];
  constructor(private data: DataService,
    private router: Router,
    private httpService: HttpServiceService) {
      this.httpService.getvendorType().subscribe((vendorType:any)=>{
        this.vendorType =vendorType.vendorType


        // this.dataSource = new MatTableDataSource(scheme);
        // this.dataSource.paginator = this.paginator;
        // this.dataSource.sort = this.sort;
      })
     }

  ngOnInit(): void {

  }
  onDelete(id:any){
    Swal.fire({
      title: 'Do you want to delete Vendor Type?',
      showDenyButton: true,
      // showCancelButton: true,
      confirmButtonText: 'Delete',
      denyButtonText: `Cancel`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        this.httpService.deleteVendorType(id).subscribe(Data=>{
          Swal.fire('Vendor Type Deleted Successfully!', '', 'success')
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
  addNewVendorType() {
    this.router.navigate(['/dashboard/system-configuration/vendorType/add'])
  }
  edit(id:string){
    let url='/dashboard/system-configuration/vendorType/edit/'+id
    this.router.navigate([url])
  }
}
