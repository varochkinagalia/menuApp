import { Injectable, signal, computed} from '@angular/core';
import { IDish } from '../models/dish.model';

@Injectable({
  providedIn: 'root'
})

export class MenuService {
    private section = signal<string>('завтрак');

    getSection() { 
        return this.section.asReadonly();
    }

    setSection(section: string) { 
        if (section === "breakfast") this.section.set('завтрак')
        else if (section === "lunch") this.section.set("обед")
        else if (section === "dinner") this.section.set("ужин")
    }

    private dishes = signal<IDish[]>([
        { id: 1, section: "завтрак", name: "каша", price: 100, selected: false },
        { id: 2, section: "завтрак",  name: "омлет", price: 200, selected: false },
        { id: 3, section: "завтрак",  name: "яичница", price: 250, selected: false },
        { id: 4, section: "завтрак",  name: "чай", price: 50, selected: false },
        { id: 5, section: "завтрак",  name: "кофе", price: 70, selected: false },
        { id: 6, section: "обед", name: "борщ", price: 220, selected: false },
        { id: 7, section: "обед",  name: "щи", price: 300, selected: false },
        { id: 8, section: "обед",  name: "салат", price: 150, selected: false },
        { id: 9, section: "обед",  name: "уха", price: 400, selected: false },
        { id: 10, section: "обед",  name: "хлеб", price: 70, selected: false },
        { id: 11, section: "ужин", name: "рис", price: 80, selected: false },
        { id: 12, section: "ужин",  name: "греча", price: 60, selected: false },
        { id: 13, section: "ужин",  name: "котлета", price: 120, selected: false },
        { id: 14, section: "ужин",  name: "рыба", price: 190, selected: false },
        { id: 15, section: "ужин",  name: "компот", price: 70, selected: false },
    ]);

    private currentDishes = computed(() => {
        return this.dishes().filter((dish: IDish) => dish.section === this.section());
    });

    getDishes() { 
        return this.currentDishes;
    }

    private currentCount = computed(() => {
        return this.currentDishes().filter((dish: IDish) => dish.selected === true).length;
    });

    getCount() { 
        return this.currentCount;
    }

    private currentSum = computed(() => {
        let sum = 0;
        this.currentDishes().forEach((dish: IDish) => {
            if (dish.selected) { 
                sum += dish.price;
            }
        });

        return sum;
    });

    getSum() { 
        return this.currentSum;
    }

    changeDishes(id: number) { 
        this.dishes.update(dishes => {
            return dishes.map(dish => {
                if (dish.id === id) {
                    const newSelected = !dish.selected;
                    return { ...dish, selected: newSelected };
                }
                else { 
                    return dish;
                }
            });
        });
    }
}
