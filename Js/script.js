// Initialized Variables
let songIndex = 0;
let audioElement = new Audio('images/songs/1.mp3');
let masterPlay = document.getElementById("masterPlay");
let myProgressBar = document.getElementById("myProgressBar");
let gif = document.getElementById("gif")
let masterSongName = document.getElementById("masterSongName");
let songItems = Array.from(document.getElementsByClassName("songItem"));


let songs = [
    { songName: "Na Jana - Hindi [NCS Release]", filePath: "/images/songs/1.mp3", coverPath: "/images/covers/1.jpg" },
    { songName: "Warriyo - Mortals", filePath: "/images/songs/2.mp3", coverPath: "/images/covers/2.jpg" },
    { songName: "Cielo - Huma-Huma", filePath: "/images/songs/3.mp3", coverPath: "/images/covers/3.jpg" },
    { songName: "DEAF KEV - Invincible", filePath: "/images/songs/4.mp3", coverPath: "/images/covers/4.jpg" },
    { songName: "Different Heaven & EH!DE", filePath: "/images/songs/5.mp3", coverPath: "/images/covers/5.jpg" },
    { songName: "Janji-Heroes-Tonight", filePath: "/images/songs/6.mp3", coverPath: "/images/covers/6.jpg" },
    { songName: "Rabba - Salam-e-Ishq", filePath: "/images/songs/7.mp3", coverPath: "/images/covers/7.jpg" },
    { songName: "Sakhiyaan", filePath: "/images/songs/8.mp3", coverPath: "/images/covers/8.jpg" },
    { songName: "Bhula Dena", filePath: "/images/songs/9.mp3", coverPath: "/images/covers/9.jpg" },
    { songName: "Tumhari Kasam ", filePath: "/images/songs/10.mp3", coverPath: "/images/covers/10.jpg" },
];

songItems.forEach((element, i) => {
    element.getElementsByTagName("img")[0].src = songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName;
})

// Handle play/pause click
masterPlay.addEventListener('click', () => {
    if (audioElement.paused || audioElement.currentTime <= 0) {
        audioElement.play();
        masterPlay.classList.remove("fa-circle-play")
        masterPlay.classList.add("fa-circle-pause")
        gif.style.opacity = 1;
    } else {
        audioElement.pause();
        masterPlay.classList.remove("fa-circle-pause")
        masterPlay.classList.add("fa-circle-play")
        gif.style.opacity = 0;
    }
});

// Listen to Events
audioElement.addEventListener('timeupdate', () => {
    // Update seekBar
    progress = parseInt((audioElement.currentTime / audioElement.duration * 100))
    myProgressBar.value = progress;
});

myProgressBar.addEventListener('change', () => {
    audioElement.currentTime = myProgressBar.value * audioElement.duration / 100
})

let songItemPlay = Array.from(document.getElementsByClassName("songitemPlay"));
const makeAllPlays = () => {
    songItemPlay.forEach((element) => {
        element.classList.remove('fa-circle-pause');
        element.classList.add('fa-circle-play');
    });
};

songItemPlay.forEach((element) => {
    element.addEventListener('click', (e) => {
        makeAllPlays();
        songIndex = parseInt(e.target.id);
        e.target.classList.remove("fa-circle-play");
        e.target.classList.add("fa-circle-pause");
        audioElement.src = (`/images/songs/${songIndex + 1}.mp3`)
        masterSongName.innerText = songs[songIndex].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        gif.style.opacity = 1;
        masterPlay.classList.remove("fa-circle-play")
        masterPlay.classList.add("fa-circle-pause")
    });
});

document.getElementById('next').addEventListener('click', () => {
    if (songIndex >= 9) {
        songIndex = 0
    } else {
        songIndex += 1;
    }
    audioElement.src = (`/images/songs/${songIndex + 1}.mp3`)
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove("fa-circle-play")
    masterPlay.classList.add("fa-circle-pause")
})

document.getElementById('previous').addEventListener('click', () => {
    if (songIndex <= 0) {
        songIndex = 0
    } else {
        songIndex -= 1;
    }
    audioElement.src = (`/images/songs/${songIndex + 1}.mp3`)
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove("fa-circle-play")
    masterPlay.classList.add("fa-circle-pause")
})
