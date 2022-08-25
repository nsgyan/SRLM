import { Component, OnInit,ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import Swal from 'sweetalert2';
import { Scheme } from 'src/app/shared/data.model';
import { DataService } from 'src/app/shared/data.service';
import { HttpServiceService } from 'src/app/shared/service/http-service.service';
import {Location} from '@angular/common';

@Component({
  selector: 'app-scheme',
  templateUrl: './scheme.component.html',
  styleUrls: ['./scheme.component.css']
})
export class SchemeComponent implements OnInit {
  displayedColumns: string[] = ['id', 'schemeCode', 'schemeName', 'schemeClassification','agencyName','bankName','accountNo'];
dataSource!: MatTableDataSource<any>;

@ViewChild(MatPaginator) paginator!: MatPaginator;
@ViewChild(MatSort) sort!: MatSort;


  scheme: any
  constructor(
    private data: DataService,
    private router: Router,
    private httpService: HttpServiceService) {
      this.httpService.getScheme().subscribe((scheme:any)=>{
        this.scheme =scheme.schemes
        console.log(this.scheme);

        // this.dataSource = new MatTableDataSource(scheme);
        // this.dataSource.paginator = this.paginator;
        // this.dataSource.sort = this.sort;
      })
    }

  ngOnInit(): void {
    // this.scheme = this.data.getscheme()
    // console.log(this.scheme);
    // this.data.schemeChange.subscribe((scheme: Scheme[]) => {
    //   this.scheme = scheme
    //   console.log(scheme);

    // })
  }
  addScheme() {
    this.router.navigate(['/dashboard/system-configuration/scheme/add'])
  }

  // applyFilter(event: Event) {
  //   const filterValue = (event.target as HTMLInputElement).value;
  //   this.dataSource.filter = filterValue.trim().toLowerCase();
  // }
  deleteScheme(id:any){
    Swal.fire({
      title: 'Do you want to delete scheme?',
      showDenyButton: true,
      // showCancelButton: true,
      confirmButtonText: 'Delete',
      denyButtonText: `Cancel`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        this.httpService.deleteScheme(id).subscribe(Data=>{
          Swal.fire('Scheme Deleted Successfully!', '', 'success')
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
  editScheme(id:string){
 let url='/dashboard/system-configuration/scheme/edit/'+id
 console.log(url)
    this.router.navigate([url])
  }



}
