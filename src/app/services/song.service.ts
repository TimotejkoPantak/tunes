import { Injectable, Output, EventEmitter } from '@angular/core';
import { iTunesService } from './itunes.service';
import { Song, SongFromItunes } from '../types';
import { observable, Subscription } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SongService {

  @Output() songAdded: EventEmitter<any> = new EventEmitter();

  private songs: Song[] = [];

  constructor(private iTunes: iTunesService) {}

  //RETURN ALL SONGS

  public getSongs(query: string){
    if (query) {
      this.iTunes.getData(query).subscribe(
        //next
        (data: any) => {
          this.songs = data.results.filter(
            (song: SongFromItunes) => song.kind === 'song'
          ).map((song: SongFromItunes) => this.extractData(song));

          this.songAdded.emit(this.songs);
        },
        //error
        (err: any) => {console.log(err);},
        //complete
        () => {console.info('complete');}
      );
    }
  
  }
      

  // addSong(name: string): void {
  //   this.songs.push({
  //     id: Math.max(...this.songs.map((song) => song.id)) + 1,
  //     name: name,
  //     artist: 'Artist 4',
  //   });
  // }

  public extractData({
    trackId: id, 
    artistName: artist,
    previewUrl: audioFile,
    artworkUrl100: artwork,
    trackName: title,
    collectionName: album
  }:SongFromItunes): Song{
    
    return {id, artist, audioFile, artwork, title, album} as Song;
  }
}
