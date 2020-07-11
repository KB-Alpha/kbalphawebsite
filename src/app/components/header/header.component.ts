import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  template: `
  <nav class="navbar has-text-white" role="navigation" aria-label="main navigation" style="background-color: #41754e;">
  <div class="navbar-brand">
    <a class="navbar-item" href="#">
      <img src="/assets/icons8-alpha-100.png" width="50" height="100"/>
    </a>

    <a role="button" class="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
    </a>
  </div>

  <div id="navbarBasicExample" class="navbar-end">
    <div class="navbar-start">
      <a class="navbar-item" routerLink="" routerLinkActive="active">
        Home
      </a>

      <a class="navbar-item" routerLink="" routerLinkActive="active">
        <div class="navbar-item has-dropdown is-hoverable">
          <a class="navbar-link">
            Services
          </a>

          <div class="navbar-dropdown">
            <a class="navbar-item" routerLink="/softwaredevservice" routerLinkActive="active">
              Software development
            </a>
            <a class="navbar-item" routerLink="/serapismedical" routerLinkActive="active">
              Serapis Medical
            </a>
          </div>

      </div>
      </a>

      <a class="navbar-item" routerLink="/about-us" routerLinkActive="active">
        Contact
      </a>
      
      <a class="navbar-item" routerLink="/about-us" routerLinkActive="active">
        About
      </a>

    </div>
  </div>

<br>

</nav >
  `,
styles:[]
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
