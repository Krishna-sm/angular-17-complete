import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Contact } from '../../models';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-postpage',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './postpage.component.html',
  styleUrl: './postpage.component.css'
})
export class PostpageComponent {
  constructor(private http:HttpClient){}

      contact:Contact[]= [];

    getData(){
      this.http.get<Contact[]>(`https://662246f527fcd16fa6c95bec.mockapi.io/contact`,{observe:'response'}).subscribe((cur)=>{
        // console.log(cur);
        this.contact = cur.body || [];
        
      })
    }
      ngOnInit(){
        this.getData();
      }


      onDeleteHandler(id:any){
        this.http.delete(`https://662246f527fcd16fa6c95bec.mockapi.io/contact/${id}`,{observe:'response'}).subscribe((cur)=>{
          // console.log(cur);
       console.log("deelted");
       this.getData();
       
          
        })
      }
  
}
