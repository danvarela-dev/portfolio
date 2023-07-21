import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ThemeService } from 'src/app/modules/shared/services/theme/theme.service';
import { slide } from '../animations/slide.animation';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  animations: [slide],
})
export class NavbarComponent implements OnInit {
  @Input({ required: true }) isMobile = false;

  isDarkTheme$ = new Observable<boolean>();

  isDrawerOpen = false;
  drawerAnimationState = 0;

  constructor(private themeService: ThemeService) {}

  ngOnInit(): void {
    this.isDarkTheme$ = this.themeService.theme;
  }

  toggleDrawer(): void {
    this.isDrawerOpen = !this.isDrawerOpen;
    this.drawerAnimationState = this.isDrawerOpen ? -1 : 1;
  }
}
