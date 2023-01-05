import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-tunes',
  templateUrl: './tunes.component.html',
  styleUrls: ['./tunes.component.scss'],

})
export class TunesComponent implements OnInit {


  title: string = 'Tunes';
  newSong: string = '';

  constructor() {}

  ngOnInit(): void {
    
  }

  newSongCame(value: string): void {
    console.log('new song came');
    this.newSong = value;
  }

  changeTitle(value: string): void {
    this.title = value;
  }
}
