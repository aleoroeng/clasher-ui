import { Component, OnInit } from '@angular/core';
import { PlayerService } from 'src/app/service/player.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  constructor(private playerService: PlayerService) { }

  ngOnInit(): void {
    this.playerService.getPlayerByTag().subscribe(res=>{
      console.log(res);
    });
  }

}
