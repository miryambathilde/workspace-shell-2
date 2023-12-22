import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppComponent } from 'src/app/app.component';

@Component({
  selector: 'app-call-dialog',
  standalone: true,
  imports: [CommonModule, AppComponent],
  templateUrl: './call-dialog.component.html',
  styleUrls: ['./call-dialog.component.scss'],
})
export class CallDialogComponent {}
