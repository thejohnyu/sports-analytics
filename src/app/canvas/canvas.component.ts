import { Component, AfterViewInit, ViewChild, ElementRef, ChangeDetectionStrategy, OnDestroy } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-canvas',
    templateUrl: './canvas.component.html',
    styleUrls: ['./canvas.component.scss'],
    imports: [FormsModule],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class CanvasComponent implements AfterViewInit, OnDestroy {
  @ViewChild('canvasElement') canvasRef!: ElementRef<HTMLCanvasElement>;
  private context!: CanvasRenderingContext2D;
  private isDrawing = false;
  private lastX = 0;
  private lastY = 0;
  private image: HTMLImageElement | null = null;
  private zoomLevel = 1;
  private wheelHandler = (event: WheelEvent) => this.onWheel(event);
  private dragEnterHandler = (event: DragEvent) => this.onDragEnter(event);
  private dragOverHandler = (event: DragEvent) => this.onDragOver(event);
  private dropHandler = (event: DragEvent) => this.onDrop(event);

  currentColor = '#000000';
  strokeWidth = 0.125;

  ngAfterViewInit(): void {
    const canvas = this.canvasRef.nativeElement;
    this.context = canvas.getContext('2d')!;
    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;
    this.context.lineJoin = 'round';
    this.context.lineCap = 'round';

    canvas.addEventListener('mousedown', this.startDrawing.bind(this));
    canvas.addEventListener('mousemove', this.draw.bind(this));
    canvas.addEventListener('mouseup', this.stopDrawing.bind(this));
    canvas.addEventListener('mouseout', this.stopDrawing.bind(this));
    canvas.addEventListener('touchstart', this.startDrawing.bind(this));
    canvas.addEventListener('touchmove', this.draw.bind(this));
    canvas.addEventListener('touchend', this.stopDrawing.bind(this));
    canvas.addEventListener('dragenter', this.dragEnterHandler);
    canvas.addEventListener('dragover', this.dragOverHandler);
    canvas.addEventListener('drop', this.dropHandler);
    canvas.addEventListener('wheel', this.wheelHandler);
  }

  ngOnDestroy(): void {
    const canvas = this.canvasRef.nativeElement;
    canvas.removeEventListener('mousedown', this.startDrawing.bind(this));
    canvas.removeEventListener('mousemove', this.draw.bind(this));
    canvas.removeEventListener('mouseup', this.stopDrawing.bind(this));
    canvas.removeEventListener('mouseout', this.stopDrawing.bind(this));
    canvas.removeEventListener('touchstart', this.startDrawing.bind(this));
    canvas.removeEventListener('touchmove', this.draw.bind(this));
    canvas.removeEventListener('touchend', this.stopDrawing.bind(this));
    canvas.removeEventListener('dragenter', this.dragEnterHandler);
    canvas.removeEventListener('dragover', this.dragOverHandler);
    canvas.removeEventListener('drop', this.dropHandler);
    canvas.removeEventListener('wheel', this.wheelHandler);
  }

  private getEventCoordinates(event: MouseEvent | TouchEvent): { x: number; y: number } {
    const canvas = this.canvasRef.nativeElement;
    if (event instanceof MouseEvent) {
      return { x: event.offsetX, y: event.offsetY };
    } else if (event.touches && event.touches.length > 0) {
      const rect = canvas.getBoundingClientRect();
      return { x: event.touches[0].clientX - rect.left, y: event.touches[0].clientY - rect.top };
    }
    return { x: 0, y: 0 };
  }

  startDrawing(event: MouseEvent | TouchEvent): void {
    event.preventDefault();
    this.isDrawing = true;
    const { x, y } = this.getEventCoordinates(event);
    this.lastX = x;
    this.lastY = y;
  }

  draw(event: MouseEvent | TouchEvent): void {
    if (!this.isDrawing) return;
    event.preventDefault();
    const { x, y } = this.getEventCoordinates(event);
    this.context.strokeStyle = this.currentColor;
    this.context.lineWidth = this.strokeWidth * 16;
    this.context.beginPath();
    this.context.moveTo(this.lastX, this.lastY);
    this.context.lineTo(x, y);
    this.context.stroke();
    this.lastX = x;
    this.lastY = y;
  }

  stopDrawing(event: MouseEvent | TouchEvent): void {
    event.preventDefault();
    this.isDrawing = false;
  }

  clearCanvas(): void {
    const canvas = this.canvasRef.nativeElement;
    this.context.clearRect(0, 0, canvas.width, canvas.height);
    if (this.image) {
      this.drawImage();
    }
  }

  onWheel(event: WheelEvent): void {
    event.preventDefault();
    const delta = event.deltaY;
    this.zoomLevel *= delta > 0 ? 0.9 : 1.1;
    this.drawImage();
  }

  zoomIn(): void {
    this.zoomLevel *= 1.1;
    this.drawImage();
  }

  zoomOut(): void {
    this.zoomLevel *= 0.9;
    this.drawImage();
  }

  onDragEnter(event: DragEvent): void {
    event.preventDefault();
  }

  onDragOver(event: DragEvent): void {
    event.preventDefault();
  }

  onDrop(event: DragEvent): void {
    event.preventDefault();
    if (event.dataTransfer && event.dataTransfer.files.length > 0) {
      const file = event.dataTransfer.files[0];
      const reader = new FileReader();
      reader.onload = (e: any) => {
        this.loadImage(e.target.result);
      };
      reader.readAsDataURL(file);
    }
  }

  loadImage(src: string): void {
    this.image = new Image();
    this.image.onload = () => {
      this.zoomLevel = 1;
      this.drawImage();
    };
    this.image.src = src;
  }

  drawImage(): void {
    if (!this.image) return;
    const canvas = this.canvasRef.nativeElement;
    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;
    this.context.clearRect(0, 0, canvas.width, canvas.height);
    const imgWidth = this.image.width * this.zoomLevel;
    const imgHeight = this.image.height * this.zoomLevel;
    const x = (canvas.width - imgWidth) / 2;
    const y = (canvas.height - imgHeight) / 2;
    this.context.drawImage(this.image, x, y, imgWidth, imgHeight);
  }
}
