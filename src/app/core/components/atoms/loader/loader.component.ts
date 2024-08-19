import { Component } from '@angular/core';

@Component({
  selector: 'app-loader',
  standalone: true,
  imports: [],
  template: `
    <div class="loading-container">
      <div class="loader"></div>
    </div>
  `,
  styles: `
    .loading-container{
      display: flex;
      justify-content: center;
      align-items: center;
      height:100%
    }

    .loader {
      border: 8px solid #fff; /* Light grey */
      border-top: 8px solid #3498db; /* Blue */
      border-radius: 50%;
      width: 48px;
      height: 48px;
      animation: spin 2s linear infinite;
    }

    @keyframes spin {
      0% { transform: rotate(0deg); }
      100% { transform: rotate(360deg); }
    }
  `
})
export class LoaderComponent {

}
