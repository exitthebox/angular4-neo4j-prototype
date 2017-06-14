import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { LandingComponent } from './landing/landing.component';
import { AddComponent } from './add/add.component';
import { EditComponent } from './edit/edit.component';
import { FieldComponent } from './edit/field/field.component';

const appRoutes: Routes=[
  {path: 'add', component: EditComponent},
  {path: 'edit', component: AddComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    AddComponent,
    EditComponent,
    FieldComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
