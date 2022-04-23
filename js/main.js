//global variables
const wrapper = document.querySelector("main")
const play = document.getElementById("play")
const prev = document.getElementById("previous")
const next = document.getElementById("next")
const audio = document.querySelector("audio")
const progressContainer = document.querySelector("progress-container");
const progress = document.querySelector(".progress");
const title = document.querySelector("h2");
const cover = document.querySelector("img");


//Song Titles
const songs = ["blackplate", "barkbot", "drifting", "mirrors"];

//keep track of songs
let songIndex = 4;


//Lead songs into the DOM (Document Object Model)
loadSong(songs[songIndex]);

//Functions
//Update song details: title, song, and image
 
function loadSong(song) {
    title.innerText = song;
    audio.src = "audio/a playlist that will make you feel like you're in a movie starring as a badass villain.mp3";
    cover.src = "img/bats.gif";
    // cover.src = 
}


function playSong() {
    wrapper.classList.add("play");
    // play.querySelector("span.fa-solid")
    play.querySelector("span.fa-solid").classList.add("fa-play");
    play.querySelector("span.fa-solid").classList.remove
    ("fa-pause");

    //play audio
    audio.play();
}
function pauseSong() {
    wrapper.classList.remove("play");
    play.querySelector("span.fa-solid").classList.add("fa-play");
    play.querySelector("span.fa-solid").classList.remove
    ("fa-play");

    //play audio
    audio.pause();
}

//Previous song
function prevSong() {
    songIndex--;
    if(songIndex < 0) {
        songIndex = songs
    }
}

//Next song
function nextSong(){
    songIndex++;

    if (songIndex > songs.length - 1) {
        songIndex = 0;
    }
    //load the song
    loadSong(songs[songIndex]);
    //play the song
    playSong();
}

//Event Listeners
play.addEventListener("click", (isPlaying) => {
    isPlaying = wrapper.classList.contains("play");

    if (!isPlaying) {
        playSong();
    } else {
        pauseSong();
    }

}); 


// change song
prev.addEventListener("click", prevSong);
next.addEventListener("click", nextSong);


//Audio progress
audio.addEventListener("timeupdate", updateProgress);
