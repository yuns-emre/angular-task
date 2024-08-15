import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FontAwesomeModule, FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FontAwesomeModule],
  template: `
    <router-outlet >
    <router-outlet />
  `,
  styles: [],
})
export class AppComponent {
  title = 'angular-task';
  constructor(library: FaIconLibrary) {
    library.addIconPacks(fas, fab, far,);
  }
}
