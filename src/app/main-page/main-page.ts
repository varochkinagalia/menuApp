import { Component } from '@angular/core';
import { Header } from './header/header';
import { Main } from './main/main';

@Component({
  selector: 'app-main-page',
  imports: [Header, Main],
  templateUrl: './main-page.html',
  styleUrl: './main-page.css',
})
export class MainPage {

}
