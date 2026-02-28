import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Aside } from './aside/aside';

@Component({
  selector: 'app-main',
  imports: [RouterOutlet, Aside],
  templateUrl: './main.html',
  styleUrl: './main.css',
})
export class Main {

}
