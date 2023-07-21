import { Component, OnInit } from '@angular/core';
import { Observable, take } from 'rxjs';
import { ThemeService } from 'src/app/modules/shared/services/theme/theme.service';
import { slide } from '../animations/slide.animation';
@Component({
  selector: 'app-theme-toggle',
  templateUrl: './theme-toggle.component.html',
  styleUrls: ['./theme-toggle.component.scss'],
  animations: [slide],
})
export class ThemeToggleComponent implements OnInit {
  isDarkTheme$ = new Observable<boolean>();
  animationState = 0;

  constructor(private themeService: ThemeService) {}

  ngOnInit(): void {
    this.isDarkTheme$ = this.themeService.theme;
  }

  toggle() {
    this.themeService.toggleTheme();
    this.isDarkTheme$.pipe(take(1)).subscribe((isDarkTheme) => {
      this.animationState = isDarkTheme ? -1 : 1;
    });
  }
}
