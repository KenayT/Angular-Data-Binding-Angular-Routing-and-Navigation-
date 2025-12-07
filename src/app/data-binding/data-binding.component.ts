import { Component } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  imports: [],
  templateUrl: './data-binding.component.html',
  styleUrl: './data-binding.component.css'
})
export class DataBindingComponent {
  // Interpolation
studentName = "Your name here";
score = 95;

// Property binding
imageUrl = "https://picsum.photos/200";
isDisabled = true;

// Attribute binding
colSpanValue = 3;

// Class binding
isPassing = true;

// Style binding
boxColor = "purple";
boxSize = "150px";
}
