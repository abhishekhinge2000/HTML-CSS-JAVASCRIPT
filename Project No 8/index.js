const audioPlayer = document.getElementById('audioPlayer');
const playlist = document.getElementById('playlist');

function changeTrack() {
  const selectedTrack = playlist.value;
  audioPlayer.src = selectedTrack;
}