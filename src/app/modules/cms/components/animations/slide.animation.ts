import { animate, style, transition, trigger } from '@angular/animations';

export const slide = trigger('slideAnimation', [
  transition(':decrement', [
    style({ transform: 'translateX(-100%)' }),
    animate('300ms', style({ transform: 'translateX(0)' })),
  ]),
  transition(':increment', [
    style({ transform: 'translateX(100%)' }),
    animate('300ms', style({ transform: 'translateX(0)' })),
  ]),
]);
