import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, Subject, take } from 'rxjs';
import { ThemeService } from 'src/app/modules/shared/services/theme/theme.service';
import { slide } from '../animations/slide.animation';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  animations: [slide],
})
export class NavbarComponent implements OnInit, OnDestroy {
  @Input({ required: true }) isMobile = false;

  isDarkTheme$ = new Observable<boolean>();

  isDrawerOpen = false;
  drawerAnimationState = 0;

  readonly #unsubscribe$ = new Subject<void>();

  constructor(
    private themeService: ThemeService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.isDarkTheme$ = this.themeService.theme;
    this.router.events.subscribe(() => {
      this.isDrawerOpen = false;
      this.drawerAnimationState = 0;
    });
  }

  toggleDrawer(): void {
    this.isDrawerOpen = !this.isDrawerOpen;
    this.drawerAnimationState = this.isDrawerOpen ? -1 : 1;
  }

  ngOnDestroy(): void {
    this.#unsubscribe$.next();
    this.#unsubscribe$.complete();
  }
}
