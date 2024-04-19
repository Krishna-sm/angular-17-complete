import { Component } from '@angular/core';
import { ActivatedRoute, Router, RouterLinkActive } from '@angular/router';
import { Contact } from '../../models';
import { HttpClient } from '@angular/common/http';
import { Location } from '@angular/common';

@Component({
  selector: 'app-perpostpage',
  standalone: true,
  imports: [],
  templateUrl: './perpostpage.component.html',
  styleUrl: './perpostpage.component.css'
})
export class PerpostpageComponent {
  id:any;  
  obj:Contact={
    name:'',
    email:'',
    msg:''
  }
      constructor(private routes:ActivatedRoute,private http:HttpClient,private useRoute:Router,private location:Location){
        // console.log();
          
      }


      ngOnInit(){ 
        this.routes.params.subscribe((c)=>{
          // console.log(c);
          this.http.get<Contact>(`https://662246f527fcd16fa6c95bec.mockapi.io/contact/${c['id']}`,{observe:'response'})
          .subscribe((c)=>{
            if(c.status === 404 || !c.ok){

              
              this.obj.msg="getting some error :("
              return
            }

                this.obj.name = c.body?.name || '';
                this.obj.email = c.body?.email || '';
                this.obj.msg = c.body?.msg || '';

          })

              // this.id = c['id'];
        })            
            
      }

      backButton(){
        this.location.back()
        // this.useRoute.navigate([
        //   {
        //     path:''
        //   }
        // ])
      }
} 
