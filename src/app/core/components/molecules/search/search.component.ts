import { Component, EventEmitter, Output } from '@angular/core';
import { InputComponent } from "../../atoms/input/input.component";
import { AtomBtnWithIconComponent } from "../../atoms/atom-btn-with-icon/atom-btn-with-icon.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [InputComponent, AtomBtnWithIconComponent, CommonModule],
  template: `
    <div class="search-container">
      <app-input type="text" placeholder="Search objects..." [className]="'search-input'" [isChangeControl]="true" (changeValue)="setText($event)"  ></app-input>
      <app-atom-btn-with-icon type="button" className="search-btn" (callFunction)="search()"  icon="/assets/icons/search-icon.svg" [isWithIcon]="true"></app-atom-btn-with-icon>
    <div>
  `,
  styles: `
    .search-container {
      display: flex;
      justify-content: start;
      align-items: center;
      width:100%;

      app-atom-btn-with-icon{
        display: flex;
        align-items: center;
      }

      app-input{
        width:100%
      }
    }
    
  `
})
export class SearchComponent {
  @Output() callback = new EventEmitter();

  searchText: string = "";

  constructor() { }

  setText(value: string) {
    this.searchText = value;
  }

  search() {
    console.log("send data: " + this.searchText);
    this.callback.emit(this.searchText);
  }
}
