import { Component, HostListener, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ThemeService } from 'src/app/modules/shared/services/theme/theme.service';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.scss'],
})
export class AboutMeComponent implements OnInit {
  @HostListener('window:resize', ['$event'])
  onResize() {
    this.screenWidth = window.innerWidth;
    this.isMobile = this.screenWidth < 1024;
  }

  isDarkTheme$ = new Observable<boolean>();
  resumeUrl =
    'https://drive.google.com/drive/folders/1ZWwCYZGljDGZrVT6sn06LEXYvq1D7Eqz?usp=sharing';
  emailStr = 'mailto:daniel38912@gmail.com';
  isMobile = false;
  screenWidth = window.innerWidth;

  constructor(private themeService: ThemeService) {}

  ngOnInit(): void {
    this.isDarkTheme$ = this.themeService.theme;
  }
}
