
const songItems = document.querySelectorAll(".lists ul li");
const player = document.querySelector(".player");

const songInfo = document.createElement("div");
songInfo.classList.add("song-info");
songInfo.innerHTML = `
  <img id="cover" src="img/musiccover1.jpg" alt="cover">
  <div class="text">
    <h3 id="song-title">No song playing</h3>
    <p id="lyrics">Select a song to see lyrics...</p>
  </div>
`;
player.prepend(songInfo);

const audio = document.createElement("audio");
audio.id = "audio-player";
audio.controls = true;
audio.style.width = "300px";
player.appendChild(audio);

const songData = {
  "'Cause You Have To – LANY": {
    src: "songs/cause-you-have-to.mp3",
    cover: "img/lany.jpg",
    lyric: "I still see your face in every crowd<br>Cause you have to, but I don’t know how<br>Even when we’re miles apart<br>Your name’s still written on my heart."
  },
  "Stay a little longger – ROSE": {
    src: "songs/stay-a-little-longer.mp3",
    cover: "img/rosie.jpg",
    lyric: "Stay a little longer, don’t fade away<br>Let the night take us where hearts wanna stay<br>Every word you say feels like home<br>So please, don’t let me go."
  },
  "GO! – CORTIS": {
    src: "songs/go.mp3",
    cover: "img/cortiz.jpg",
    lyric: "Run and chase it, don’t ever slow<br>Keep it wild, just let it go<br>The world’s too small for dreams this big<br>We’re born to move, not to dig."
  },
  "JUMP – Blackpink": {
    src: "songs/jump.mp3",
    cover: "img/bp.jpg",
    lyric: "Jump high, don’t look down<br>We’re the queens wearing the crown<br>Feel the rhythm, feel the beat<br>We own the night, we own the street."
  },
  "XXL – LANY": {
    src: "songs/xxl.mp3",
    cover: "img/lany.jpg",
    lyric: "Dreams too big, hearts too wide<br>We’re living loud, no need to hide<br>Every night feels like a show<br>We go XXL, we glow."
  },
  "drink or coffe – ROSE": {
    src: "songs/drink-or-coffee.mp3",
    cover: "img/rosie.jpg",
    lyric: "Coffee cups and rainy nights<br>Still thinking of you under city lights<br>Every sip reminds me of you<br>What’s bitter feels too true."
  },
  "Angel #48 – aespa": {
    src: "songs/angel48.mp3",
    cover: "img/aespa.png",
    lyric: "I’m your angel number forty-eight<br>Falling slow but never late<br>Wings of glass and silver skies<br>I’ll lift you up where freedom lies."
  },
  "Super Far – LANY": {
    src: "songs/super-far.mp3",
    cover: "img/lany2.jpg",
    lyric: "I’m super far from where we started<br>But you still live where my heart is<br>Every step I take away<br>Feels like running in replay."
  }
};

songItems.forEach((item) => {
  item.addEventListener("click", () => {
    const title = item.querySelector("p").textContent.trim();
    const data = songData[title];

    if (data) {
      document.getElementById("cover").src = data.cover;
      document.getElementById("song-title").textContent = title;
      document.getElementById("lyrics").innerHTML = data.lyric;
      audio.src = data.src;
      audio.play();
    } else {
      console.log("Lagu tidak ditemukan:", title);
    }
  });
});
