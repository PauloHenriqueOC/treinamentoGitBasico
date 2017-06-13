class Player {
  constructor(){
    this.playlist = ['song1.mp3'];
    this.currentSong = this.playlist[0];
    this.state = 'PAUSED';
  }
  play(){
    console.log('Playing '+this.currentSong);
  }
  
  //TODO: Add Pause()
  pause(){
    console.log('Paused '+this.currentSong);
  }

  //TODO: Add Stop()
  stop(){
    console.log('Stoped '+this.currentSong);
  }

  add(song){
    this.playlist.push(song);
  }
}
