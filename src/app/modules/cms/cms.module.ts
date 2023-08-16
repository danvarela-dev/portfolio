import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { LayoutComponent } from './components/layout/layout.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ThemeToggleComponent } from './components/theme-toggle/theme-toggle.component';

@NgModule({
  declarations: [LayoutComponent, NavbarComponent, ThemeToggleComponent],
  imports: [CommonModule, RouterModule, BrowserModule, BrowserAnimationsModule],
})
export class CmsModule {}
