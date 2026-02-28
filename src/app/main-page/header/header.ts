import { Component, inject } from '@angular/core';
import { MenuService } from '../../services/menu-service';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {
  private menuService = inject(MenuService);

  section = this.menuService.getSection();

  count = this.menuService.getCount();

  sum = this.menuService.getSum();
}
