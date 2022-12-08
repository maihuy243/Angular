import { LayoutErrorComponent } from './Layout/LayoutError/LayoutError.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LayoutPageComponent } from './Layout/LayoutPage/LayoutPage.component';
import { AppRoutingModule } from './AppRouting.routing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SidebarComponent } from './Layout/sidebar/sidebar.component';

@NgModule({
  declarations: [AppComponent, LayoutErrorComponent, LayoutPageComponent, SidebarComponent],
  imports: [BrowserModule, AppRoutingModule, BrowserAnimationsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
