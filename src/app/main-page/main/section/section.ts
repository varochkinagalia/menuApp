import { Component, inject, OnInit } from '@angular/core';
import { MenuService } from '../../../services/menu-service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-section',
  imports: [],
  templateUrl: './section.html',
  styleUrl: './section.css',
})
export class Section implements OnInit {
  private route = inject(ActivatedRoute);

  menuService = inject(MenuService);

  section = this.menuService.getSection();

  dishes = this.menuService.getDishes();

  ngOnInit(): void { 
    this.route.params.subscribe(params => {
        const section = params['section'];
        this.menuService.setSection(section);
    });
  }

  change(dishId: number) { 
    this.menuService.changeDishes(dishId);
  }
}
