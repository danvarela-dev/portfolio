import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
})
export class LayoutComponent implements OnInit {
  screenWidth = window.innerWidth;
  isMobile = false;

  @HostListener('window:resize', ['$event'])
  onResize() {
    this.screenWidth = window.innerWidth;
    this.isMobile = this.screenWidth <= 1024;
  }

  ngOnInit(): void {
    this.isMobile = this.screenWidth <= 1024;
  }
}
