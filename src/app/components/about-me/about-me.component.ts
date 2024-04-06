import { Component } from '@angular/core';
import { CardComponent } from '../ui/card/card.component';

@Component({
  selector: 'app-about-me',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './about-me.component.html',
  styleUrl: './about-me.component.css'
})
export class AboutMeComponent {
  placeholderText: string = "This is the about me section."
}
