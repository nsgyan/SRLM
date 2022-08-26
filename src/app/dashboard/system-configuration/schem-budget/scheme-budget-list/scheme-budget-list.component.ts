import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { DataService } from 'src/app/shared/data.service';
import { HttpServiceService } from 'src/app/shared/service/http-service.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-scheme-budget-list',
  templateUrl: './scheme-budget-list.component.html',
  styleUrls: ['./scheme-budget-list.component.css']
})
export class SchemeBudgetListComponent implements OnInit {
  displayedColumns: string[] = ['id', 'schemeCode', 'schemeName', 'schemeClassification','agencyName','bankName','accountNo'];
  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;


    schemeBudget: any
    constructor(
      private data: DataService,
      private router: Router,
      private httpService: HttpServiceService) {
        this.httpService.getSchemeBudget().subscribe((scheme:any)=>{
          scheme.schemeBudget.map((item:any)=>{
            this.httpService.getOfficerById(item.officerName).subscribe((data:any)=>{
item.officerName=data.officerData.firstName+' '+data.officerData.middleName+''+data.officerData.lastName
            })
          })
          this.schemeBudget =scheme.schemeBudget
          console.log(this.schemeBudget);

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
      this.router.navigate(['/dashboard/system-configuration/schemeBudget/add'])
    }

    // applyFilter(event: Event) {
    //   const filterValue = (event.target as HTMLInputElement).value;
    //   this.dataSource.filter = filterValue.trim().toLowerCase();
    // }
    deleteScheme(id:any){
      Swal.fire({
        title: 'Do you want to delete Scheme Budget?',
        showDenyButton: true,
        // showCancelButton: true,
        confirmButtonText: 'Delete',
        denyButtonText: `Cancel`,
      }).then((result) => {
        /* Read more about isConfirmed, isDenied below */
        if (result.isConfirmed) {
          this.httpService.deleteSchemeBudget(id).subscribe(Data=>{
            Swal.fire('Scheme Budget Deleted Successfully!', '', 'success')
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
