import { Component, OnInit } from '@angular/core';
import { HomeService } from './home.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  private lobbies: Array<any>

  constructor( private _homeService: HomeService ) { }

  ngOnInit() {
    this._homeService.getLobbyList()
    .subscribe(data => {
      console.log(data)
      this.lobbies = data
    })
  }

}
