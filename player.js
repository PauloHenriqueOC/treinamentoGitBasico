class Player {
  constructor(){
    this.playlist = ['song1.mp3'];
    this.currentSong = this.playlist[0];
    this.state = 'STOPPED';
  }
  play(){
    console.log('Playing '+this.currentSong);
    this.state = 'PLAYING';
  }
  
  //TODO: Add Pause()
  pause(){
    console.log('Paused '+this.currentSong);
    this.state = 'PAUSED';
  }

  //TODO: Add Stop()
  stop(){
    console.log('Stoped '+this.currentSong);
  }

  add(song){
    this.playlist.push(song);
  }
}
