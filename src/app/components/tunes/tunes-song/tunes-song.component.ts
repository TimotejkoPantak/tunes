import { Component, OnInit, Input } from '@angular/core';
import { Song, SongFromItunes } from 'src/app/types';

@Component({
  selector: 'tunes-song',
  templateUrl: './tunes-song.component.html',
  styleUrls: ['./tunes-song.component.scss']
})
export class TunesSongComponent implements OnInit {
  @Input()
  song!: Song;

  constructor() { }

  ngOnInit(): void {
  }

}
