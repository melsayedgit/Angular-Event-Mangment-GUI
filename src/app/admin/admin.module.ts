import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentComponent } from './student/student.component';
import { FormsModule } from '@angular/forms';
import { DialogModule } from 'primeng/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ConfirmPopupModule } from 'primeng/confirmpopup';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { SpeakerComponent } from './speaker/speaker.component';
import { EventComponent } from './event/event.component';



@NgModule({
  declarations: [
    StudentComponent,
    SpeakerComponent,
    EventComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    DialogModule,
    BrowserAnimationsModule,
    ConfirmPopupModule,
    ButtonModule,
    TableModule,
  ],
  exports:[
    StudentComponent,
    SpeakerComponent
  ]
  
})
export class AdminModule { }
