
let songIndex = 0;
let audioElement = new Audio('songs/1.mp3');
let masterPlay =  document.getElementById('masterPlay');
let myProgressbar = document.getElementById('myProgressbar');
let gif = document.getElementById('gif');
let songItems = Array.from(document.getElementsByClassName('songItem'));


let songs = [
    {songOccurence: "Wariyo-tum ho", filePath: "songs/1.mp3", coverPath:"covers/1.jpg"},
    {songOccurence: "Cielo - tum ho", filePath: "songs/2.mp3", coverPath:"covers/2.jpg"},
    {songOccurence: "Different heaven - tum ho", filePath: "songs/3.mp3", coverPath:"covers/3.jpg"},
    {songOccurence: "Janji-Heros-tum ho", filePath: "songs/4.mp3", coverPath:"covers/4.jpg"},
    {songOccurence: "Rabba-tum ho", filePath: "songs/5.mp3", coverPath:"covers/5.jpg"},
    {songOccurence: "Sakhiyan-tum ho", filePath: "songs/6.mp3", coverPath:"covers/6.jpg"},
    {songOccurence: "Bhula Dena-tum ho", filePath: "songs/7.mp3", coverPath:"covers/7.jpg"},
    {songOccurence: "Deaf-tum ho", filePath: "songs/8.mp3", coverPath:"covers/8.jpg"},
    {songOccurence: "Tumhari KASAM-tum ho", filePath: "songs/9.mp3", coverPath:"covers/9.jpg"},
    {songOccurence: "Tumhari KASAM-tum ho", filePath: "songs/10.mp3", coverPath:"covers/10.jpg"},
]


songsItems.forEach((element, i)=>{
  
    element.getElementsByTagName("img")[0].src = songs[i].coverPath;
    element.getElementsByClassName("songOccurence")[0].innerText = songs[i].songOccurence;
})
// audioElemnt.play();



masterPlay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('ri-play-circle-line');
        masterPlay.classList.add('ri-pause-circle-line');
        gif.style.opacity = 1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('ri-pause-circle-line');
        masterPlay.classList.add('ri-play-circle-line');
        gif.style.opacity = 0;
    }
})
// listen to events
audioElement.addEventListener('timeupdate', ()=>{
    // update seekhbar

    progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
    myProgressbar.value = progress;

})

myProgressbar.addEventListener('change',()=>{
    audioElement.cuurentTime = myProgressbar.value * audioElement.duration;
})