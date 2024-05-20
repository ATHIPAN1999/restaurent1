import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'restaurant';


  doundo:String="";
  flag:boolean=true;
  
  hideandsick()
  {
      if(this.flag==true)
      {
      this.doundo="showmenu";
      this.flag=false;
      }
      else 
      {
          this.doundo="";
          this.flag=true;
    
      }
  
      
  }

  
}

