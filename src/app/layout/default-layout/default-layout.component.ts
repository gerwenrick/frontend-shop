import { Component } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from '../../components/footer/footer.component';
import { SidebarComponent } from '../../components/sidebar/sidebar.component';

@Component({
  selector: 'rvg-default-layout',
  standalone: true,
  imports: [HeaderComponent, RouterOutlet, FooterComponent, SidebarComponent],
  templateUrl: './default-layout.component.html',
  styleUrl: './default-layout.component.css',
})
export class DefaultLayoutComponent {}
