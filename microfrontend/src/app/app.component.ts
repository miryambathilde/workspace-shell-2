import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { CallDialogComponent } from './components/call-dialog/call-dialog.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, CallDialogComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'ang13';
  wind: any = window;
  messages: any = [];

  ngOnInit(): void {
    this.wind.addEventListener(
      'message',
      (event: any) => {
        console.log(event);
        const type = typeof event.data === 'string' ? JSON.parse(event.data).type : event.data.type
        if(type === 'addAssociation') {
          document.getElementById("botonModal")?.click()
        }
        this.messages.push(type);
      },
      false
    );
  }
  sendData() {
    window.parent.postMessage(
      JSON.stringify({
        type: 'laPaga',
        data: { category: 'category', data: { type: 'laPaga', cantidad: '45 euros' } },
      }),
      '*'
    );
  }
}
