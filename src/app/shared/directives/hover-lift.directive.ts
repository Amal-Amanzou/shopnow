import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHoverLift]',
  standalone: true
})
export class HoverLiftDirective {

  @Input() set appHoverLift(val: number | string) {
    this._lift = +val || 6;
  }
  private _lift: number = 6;

  constructor(private el: ElementRef) {}

  @HostListener('mouseenter')
  onMouseEnter(): void {
    const el = this.el.nativeElement;
    el.style.transform  = `translateY(-${this._lift}px)`;
    el.style.boxShadow  = '0 12px 32px rgba(0,0,0,0.15)';
    el.style.transition = 'transform 0.25s ease, box-shadow 0.25s ease';
  }

  @HostListener('mouseleave')
  onMouseLeave(): void {
    const el = this.el.nativeElement;
    el.style.transform = 'translateY(0)';
    el.style.boxShadow = '0 2px 8px rgba(0,0,0,0.08)';
  }
}