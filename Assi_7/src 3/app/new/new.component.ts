import { Component } from '@angular/core';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent {
  
  public Str = "Marvellous Infosystems"
  

  public MyAction()
  {
      this.Str = "Educating for better tomorrow"
  }

}
