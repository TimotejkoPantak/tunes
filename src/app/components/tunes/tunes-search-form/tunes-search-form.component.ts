import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Song } from 'src/app/types';
import { SongService } from 'src/app/services/song.service';
import { debounce } from 'lodash-es';

@Component({
  selector: 'tunes-search-form',
  templateUrl: './tunes-search-form.component.html',
  styleUrls: ['./tunes-search-form.component.scss'],
  
})
export class TunesSearchFormComponent implements OnInit {

  constructor(private songService: SongService) { }

  @Output() newSongsHaveArrived = new EventEmitter<string>();

  ngOnInit(): void {
  }

  getMusic(query: string): void {  
    this.songService.getSongs(query);
  }

  search = debounce((query: string): void =>{
    this.getMusic(query);
  }, 500)



}
