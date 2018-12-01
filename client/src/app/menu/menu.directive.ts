import { Directive, Input } from '@angular/core';
import { MatMenuTrigger, MatMenuPanel } from '@angular/material';

@Directive({
    selector: '[demoMenuTriggerFor]',
    exportAs: 'demoMenuTrigger'
})

export class MenuDirective extends MatMenuTrigger {
  @Input() menu: MatMenuPanel;
}
