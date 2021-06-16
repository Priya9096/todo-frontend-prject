import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  isHome: boolean;

  constructor(private router: Router) { 
    router.events.subscribe((url:any) => {
      if (router.url === "/register" || router.url === "/login") {
        this.isHome = false;
      } else {
        this.isHome = true;
      }
    });
    //console.log(router.url);  // to print only path eg:"/login"
}

  ngOnInit(): void {
  }

}
