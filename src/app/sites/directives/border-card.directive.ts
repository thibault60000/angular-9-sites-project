import { Directive, ElementRef, HostListener, Input } from "@angular/core";

@Directive({
  selector: "[stBorderCard]",
})
export class BorderCardDirective {
  // Variables
  private initialColor: string = "#f5f5f5";
  private defaultColor: string = "#009688";
  private defaultHeight: number = 180;
  private defaultCursor: string = "pointer";

  // Constructeur
  constructor(private el: ElementRef) {
    this.setBorder(this.initialColor);
    this.setHeight(this.defaultHeight);
    this.el.nativeElement.style.cursor = this.defaultCursor;
  }

  // Paramètre avec Alias
  @Input("stBorderCard") borderColor: string;

  // Listener Mouse Enter
  @HostListener("mouseenter") onMouseEnter() {
    this.setBorder(this.borderColor || this.defaultColor);
  }

  // Listener Mouse Leave
  @HostListener("mouseleave") onMouseLeave() {
    this.setBorder(this.initialColor);
  }

  // Méthode "SetBorder"
  private setBorder(color: string) {
    let border = "solid 4px " + color;
    this.el.nativeElement.style.border = border;
  }

  // Méthode "SetHeight"
  private setHeight(height: number) {
    this.el.nativeElement.style.height = height + "px";
  }
}
