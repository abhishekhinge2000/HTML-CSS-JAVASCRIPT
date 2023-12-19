console.log("Welcome To Spotify");
//initialize the variable
let songIndex = 0;
let audioElement = new Audio('1.pm3');
let masterplay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');

let songs = [
    {songName: "Salame Ishq", filePath:"Project No 9/1.pm3", coverPath: "Project No 9/c1.jpg"},
    {songName: "Salame Ishq", filePath:"2.pm3", coverPath: "c2.jpg"},
    {songName: "Salame Ishq", filePath:"3.pm3", coverPath: "c3.jpg"},
    {songName: "Salame Ishq", filePath:"4.pm3", coverPath: "c4.jpg"},
    {songName: "Salame Ishq", filePath:"5.pm3", coverPath: "c5.jpg"},
    {songName: "Salame Ishq", filePath:"6.pm3", coverPath: "c6.jpg"},
    {songName: "Salame Ishq", filePath:"7.pm3", coverPath: "c7.jpg"},
    {songName: "Salame Ishq", filePath:"8.pm3", coverPath: "c8.jpg"},
    {songName: "Salame Ishq", filePath:"9.pm3", coverPath: "c9.jpg"},
    {songName: "Salame Ishq", filePath:"10.pm3", coverPath: "c10.jpg"},
]

//audioElement.play();

//Handle play/pause click
masterPlay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
        gif.style.opacity = 1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-circle-pause');
        masterPlay.classList.add('fa-circle-play');
        gif.style.opacity = 0;
    }
})

//Listen to Events
audioElement.addEventListener('timeupdate', ()=>{
   console.log('timeupdate');
   //update seekbar
})