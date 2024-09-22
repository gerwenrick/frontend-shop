import { Component, inject, OnInit } from '@angular/core';
import { SidebarService } from '../../services/sidebar.service';
import { AsyncPipe, NgClass } from '@angular/common';
import { map, Observable, Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'rvg-sidebar',
  standalone: true,
  imports: [NgClass, AsyncPipe],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css',
})
export class SidebarComponent implements OnInit {
  private unsubscribe$: Subject<void> = new Subject();

  public sidebarService: SidebarService = inject(SidebarService);

  public isOpen: boolean = false;

  public ngOnInit(): void {
    this.sidebarService.onShowSidebarChange$
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe((isOpenFlag) => (this.isOpen = isOpenFlag));
  }

  public ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

  public handleClickOutside() {
    console.log('clicked outside');
  }
}
