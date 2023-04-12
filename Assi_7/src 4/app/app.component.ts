import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent 
{
  text = 'marvellous infosystems';

  setCase(caseType: string) {
    if (caseType === 'upper') 
    {
      this.text = 'MARVELLOUS INFOSYSTEMS';
    } else if (caseType === 'lower') {
      this.text = 'marvellous infosystems';
    }
  }
}

