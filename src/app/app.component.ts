import { Component } from '@angular/core';
import { Router } from "@angular/router";
import { filter } from 'rxjs/operators';
import { NavigationEnd } from "@angular/router";

declare var gtag;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Foodywind';

  constructor(private router:Router){
    const navEvent =  router.events.pipe(
      filter( event => event instanceof NavigationEnd)
    );

    navEvent.subscribe((event: NavigationEnd)=>{
      gtag('config', 'UA-168699319-1', {
        'page_path': event.urlAfterRedirects
      });          
    })
  }
}
