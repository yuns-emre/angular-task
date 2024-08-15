import { Component } from '@angular/core';
import { HeaderComponent } from "../../organisms/header/header.component";

@Component({
  selector: 'app-dashboard-layout',
  standalone: true,
  templateUrl: './dashboard-layout.component.html',
  styleUrl: './dashboard-layout.component.scss',
  imports: [HeaderComponent],
})
export class DashboardLayoutComponent {

}
