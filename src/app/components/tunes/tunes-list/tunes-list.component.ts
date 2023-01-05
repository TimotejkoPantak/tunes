import { Component, OnInit, Input, OnChanges, SimpleChange } from '@angular/core';
import { Song } from 'src/app/types';
import { SongService } from 'src/app/services/song.service';

@Component({
  selector: 'tunes-list',
  templateUrl: './tunes-list.component.html',
  styleUrls: ['./tunes-list.component.scss']
})
export class TunesListComponent implements OnInit, OnChanges {

  constructor(private songService: SongService) { }

    //state
    songs: Song[] = [];
    @Input() newSong: string = '';

  ngOnInit(): void {
    this.songService.songAdded.subscribe((data:Song[]) => {
      this.songs = data;

    })
  }

  ngOnChanges(changes: {[propKey: string]: SimpleChange}): void {
    // this.songService.addSong(changes['newSong'].currentValue);
  }

}
