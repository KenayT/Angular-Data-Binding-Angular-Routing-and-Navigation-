import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-directives',
  imports: [FormsModule],
  templateUrl: './directives.component.html',
  styleUrl: './directives.component.css'
})
export class DirectivesComponent {
  // Property for toggling the examples section
  showExamples: boolean = false;

  // Property for the *ngIf demo (checkbox toggle)
  isVisible: boolean = true;

  // Array for the *ngFor demo
  items: string[] = ['Item 1: Learn Angular', 'Item 2: Build Components', 'Item 3: Master Directives'];

  // Optional: TrackBy function for *ngFor performance (avoids unnecessary re-renders)
  trackByFn(index: number, item: string): any {
    return index; // Or use a unique ID if items have one
  }
}