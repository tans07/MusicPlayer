let cover_image = document.querySelector('img');
let music = document.querySelector('audio');
let title = document.querySelector('h1');
let artist = document.querySelector('h3');
let action = document.getElementById('sign-2');
let prev = document.getElementById('sign-1');
let next = document.getElementById('sign-3');
check = true;
const playmusic = () => {
    check = false;
    music.play();
    action.classList.replace('fa-play-circle', 'fa-pause-circle');
    cover_image.classList.add('effect');
};
const pausemusic = () => {
    check = true;
    music.pause();
    action.classList.replace('fa-pause-circle', 'fa-play-circle');
    cover_image.classList.remove('effect');
};
action.addEventListener('click', () => {
    if (check) 
    {
        playmusic();
    }
    else {
        pausemusic();
    }
});
playlist =
    [
        {
            media: 'media-1',
            title: 'Suit-Suit Karda',
            artist: 'Guru Randhawa',
        },

        {
            media: 'media-2',
            title: 'Despacito',
            artist: 'Luis Fonsi',  
        },
        
        {
            media: 'media-3',
            title: 'Mercy',
            artist: 'Badshah',
        },
        {
            media: 'media-4',
            title: 'Faded',
            artist: 'Alan walker',
        }
    ];
let choice = 0;
next.addEventListener('click', () => {
    choice = (choice + 1) % playlist.length;
    working_music(playlist[choice]);
    playmusic();
});
prev.addEventListener('click', () => {
    choice = (choice - 1 + playlist.length) % playlist.length;
    working_music(playlist[choice]);
    playmusic();
});
const working_music = (element) => {
    title.textContent = element.title;
    artist.textContent = element.artist;
    music.src = `${element.media}.mp3`;
    cover_image.src = element.media + ".jpg";
};