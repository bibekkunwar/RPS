import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-faq-component',
  templateUrl: './faq-component.component.html',
  styleUrls: ['./faq-component.component.css']
})
export class FaqComponentComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    const items = document.querySelectorAll(".accordion button");

    const toggleAccordion = (event: Event) => {
      const buttonElement = event.currentTarget as HTMLButtonElement;
      const itemToggle = buttonElement.getAttribute("aria-expanded");

      items.forEach((item) => item.setAttribute("aria-expanded", "false"));

      if (itemToggle === "false") {
        buttonElement.setAttribute("aria-expanded", "true");
      }
    };

    items.forEach((item) => item.addEventListener("click", toggleAccordion as EventListener));
  }
  }
