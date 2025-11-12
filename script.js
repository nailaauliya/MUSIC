// Ambil semua elemen lagu
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
  "number one girl – ROSE": {
    src: "songs/number-one-girl.mp3",
    cover: "img/rosie.jpg",
    lyric: "Your one and only<br>So what's it gon' take for you to want me?<br>I'd give it all up if you told me that I'd be<br>The number one girl in your eyes"
  },
  "3AM – ROSE": {
    src: "songs/3am.mp3",
    cover: "img/rosie.jpg",
    lyric: "Late night thoughts, I'm still awake<br>Counting stars until the day breaks"
  },
  "GO! – CORTIZ": {
    src: "songs/go.mp3",
    cover: "img/cortiz.jpg",
    lyric: "Run and chase it, don’t ever slow<br>Keep it wild, just let it go"
  },
  "JUMP – Blackpink": {
    src: "songs/jump.mp3",
    cover: "img/bp.jpg",
    lyric: "Jump high, don’t look down<br>We’re the queens, wearing the crown"
  },
  "'Cause You Have To – LANY": {
    src: "songs/cause-you-have-to.mp3",
    cover: "img/lany.jpg",
    lyric: "I still see your face in every crowd<br>Cause you have to, but I don’t know how"
  },
  "drink or coffe – ROSE": {
    src: "songs/drink-or-coffee.mp3",
    cover: "img/rosie.jpg",
    lyric: "Coffee cups and rainy nights<br>Still thinking of you under city lights"
  },
  "Rich Man – aespa": {
    src: "songs/rich-man.mp3",
    cover: "img/aespa.png",
    lyric: "Money talks, but love’s the sound<br>I keep my feet on solid ground"
  },
  "XXL – LANY": {
    src: "songs/xxl.mp3",
    cover: "img/lany.jpg",
    lyric: "Dreams too big, hearts too wide<br>We’re living loud, no need to hide"
  }
};

// Event klik lagu
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
    }
  });
});
