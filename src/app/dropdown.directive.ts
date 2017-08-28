
import { HostBinding, Directive, HostListener } from '@angular/core';
import { LogService } from './services/log.service';

@Directive({
    selector: '[ecomDropDown]'
})
export class DropDownDirective {
    private isOpen = false;

    constructor(private logService: LogService) { }

    @HostBinding('class.open') get opened() {
        return this.isOpen;
    }

    @HostListener('click') open() {
        this.isOpen = true;
        this.logService.logMensaje('Evento Click');
    }

    @HostListener('mouseleave') close() {
        this.isOpen = false;
        this.logService.logMensaje('Evento MouseLeave');
    }
}
