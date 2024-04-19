import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
    name:string ='';
    email:string ='';
    msg:string ='';

    constructor(private http:HttpClient){}


        async onSubmitHandler(form:NgForm){
              // console.log(form.value);

            try {
                    await this.http.post('https://662246f527fcd16fa6c95bec.mockapi.io/contact',{
                      name:this.name,
                      email:this.email,
                      msg:this.msg,
                    },{observe:'response'}).subscribe((c)=>{
                          if(c.ok){

                                alert("Thanks For Contacting");
                          return
                          }
                          alert("sorry :( not processing");
                    })  
                    
                    this.name = '';
                    this.email = '';
                    this. msg = '';
                    
            } catch (error:any) {
                  console.log("error: ",error.message);
                  
            }
              
        }

}
