const sounds = [
    'cow',
    'ghost',
    'ocean'
];


sounds.forEach((sound) => {
    const btn = document.createElement("button");
    btn.classList.add('btn');

    btn.innerText = sound;

    btn.addEventListener('click', ()=>{document.getElementById(sound)})

    document.getElementById('buttons').appendChild(btn);
});

function stopSongs(){
    sounds.forEach(sound =>{
        const song = document.getElementById(sound);
        song.onpause();
        song.currentTime = 0;
    });
}