import { Component, Input, TemplateRef } from '@angular/core';
import { ButtonComponent } from '../button/button.component';
import { NgOptimizedImage, NgTemplateOutlet } from '@angular/common';

@Component({
  selector: 'rvg-card',
  standalone: true,
  imports: [NgOptimizedImage, ButtonComponent, NgTemplateOutlet],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css',
})
export class CardComponent {
  @Input() cardHeader: TemplateRef<HTMLElement> | undefined;
  @Input() cardContent: TemplateRef<HTMLElement> | undefined;
  @Input() cardFooter: TemplateRef<HTMLElement> | undefined;
}
