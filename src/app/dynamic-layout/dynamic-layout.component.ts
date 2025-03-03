import { Component, AfterViewInit, ViewChild, ElementRef, ChangeDetectionStrategy, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-dynamic-layout',
  templateUrl: './dynamic-layout.component.html',
  styleUrls: ['./dynamic-layout.component.scss'],
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DynamicLayoutComponent implements AfterViewInit, OnDestroy {
  @ViewChild('container', { static: true }) container!: ElementRef<HTMLDivElement>;
  @ViewChild('resizer', { static: true }) resizer!: ElementRef<HTMLDivElement>;

  public containerWidth = 200;
  private startX = 0;
  private startWidth = 0;
  private mouseMoveListener = (event: MouseEvent) => this.onMouseMove(event);
  private mouseUpListener = () => this.onMouseUp();

  ngAfterViewInit(): void {
    this.containerWidth = this.container.nativeElement.offsetWidth;
    this.resizer.nativeElement.addEventListener('mousedown', this.onMouseDown.bind(this));
  }

  ngOnDestroy(): void {
    this.resizer.nativeElement.removeEventListener('mousedown', this.onMouseDown.bind(this));
    document.removeEventListener('mousemove', this.mouseMoveListener);
    document.removeEventListener('mouseup', this.mouseUpListener);
  }

  onMouseDown(event: MouseEvent): void {
    this.startX = event.clientX;
    this.startWidth = this.containerWidth;
    document.addEventListener('mousemove', this.mouseMoveListener);
    document.addEventListener('mouseup', this.mouseUpListener);
  }

  onMouseMove(event: MouseEvent): void {
    const dx = event.clientX - this.startX;
    this.containerWidth = Math.max(this.startWidth + dx, 200);
  }

  onMouseUp(): void {
    document.removeEventListener('mousemove', this.mouseMoveListener);
    document.removeEventListener('mouseup', this.mouseUpListener);
  }
}
