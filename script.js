const TRACKS = [
  { title: 'Theru Jaathara', artist: 'A.R. Rahman', src: 'https://raw.githubusercontent.com/praveennendrambakam/Songs/main/%5BiSongs.info%5D%2001%20-%20Theru%20Jaathara.mp3' },
  { title: 'Thaai Kelavi', artist: 'Anirudh Ravichander', src: 'https://raw.githubusercontent.com/thehamzaofficial/music_player/main/Thaai-Kelavi-Harish.mp3' },
  { title: 'Megham Karukatha', artist: 'Anirudh Ravichander', src: 'https://raw.githubusercontent.com/thehamzaofficial/music_player/main/Megham-Karukatha-Harish.mp3' },
  { title: 'Ponni Nadhi', artist: 'Anirudh Ravichander', src: 'https://raw.githubusercontent.com/thehamzaofficial/music_player/main/Ponni-Nadhi-Harish.mp3' },
  { title: 'Po Indru Neeyaga', artist: 'Anirudh Ravichander', src: 'https://raw.githubusercontent.com/thehamzaofficial/music_player/main/Po-Indru-Neeyaga-%20Harish.mp3' },
  { title: 'Poo Nee Poo', artist: 'Anirudh Ravichander', src: 'https://raw.githubusercontent.com/thehamzaofficial/music_player/main/Poo-Nee-Poo-Harish.mp3' },
  { title: 'Thenmozhi', artist: 'Anirudh Ravichander', src: 'https://raw.githubusercontent.com/thehamzaofficial/music_player/main/Thenmozhi-Harish.mp3' },
  { title: 'Maatna Gaali', artist: 'Anirudh Ravichander', src: 'https://raw.githubusercontent.com/thehamzaofficial/music_player/main/Maatna-Gaali-Harish.mp3' },
  { title: 'Life of Pazham', artist: 'Anirudh Ravichander', src: 'https://raw.githubusercontent.com/thehamzaofficial/music_player/main/Life-of-Pazham-Harish.mp3' },
  { title: 'Ey Inga Paaru', artist: 'Anirudh Ravichander', src: 'https://raw.githubusercontent.com/thehamzaofficial/music_player/main/Ey-Inga-Paaru-Harish.mp3' },
  { title: 'Va Kannamma', artist: 'Tamil Hits', src: 'https://raw.githubusercontent.com/JerishRaj/MyPlaylist/main/Va%20Kannamma%20%28PenduJatt.Com.Se%29.mp3' },
  { title: 'Velicha Poove Va', artist: 'Tamil Hits', src: 'https://raw.githubusercontent.com/JerishRaj/MyPlaylist/main/Velicha%20Poove%20Va%28SenSongsMp3.Co%29.mp3' },
  { title: 'Vinnaithaandi Varuvaaya', artist: 'A.R. Rahman', src: 'https://raw.githubusercontent.com/JerishRaj/MyPlaylist/main/Vinnaithaandi_Varuvaaya.mp3' },
];

let currentIndex = 0;
let isPlaying = false;

const audio = document.getElementById('audio');
const art = document.getElementById('art');
const trackTitle = document.getElementById('trackTitle');
const trackArtist = document.getElementById('trackArtist');
const progressBar = document.getElementById('progressBar');
const currentTimeEl = document.getElementById('currentTime');
const durationTimeEl = document.getElementById('durationTime');
const playBtn = document.getElementById('playBtn');
const volumeBar = document.getElementById('volumeBar');
const volIcon = document.getElementById('volIcon');
const playlistEl = document.getElementById('playlist');
const playlistToggle = document.getElementById('playlistToggle');

function formatTime(sec) {
  if (isNaN(sec)) return '0:00';
  const m = Math.floor(sec / 60);
  const s = Math.floor(sec % 60).toString().padStart(2, '0');
  return `${m}:${s}`;
}

function loadTrack(index, autoplay) {
  currentIndex = (index + TRACKS.length) % TRACKS.length;
  const t = TRACKS[currentIndex];
  audio.src = t.src;
  trackTitle.textContent = t.title;
  trackArtist.textContent = t.artist;
  renderPlaylist();
  if (autoplay) audio.play().then(() => setPlaying(true)).catch(() => setPlaying(false));
}

function setPlaying(playing) {
  isPlaying = playing;
  playBtn.textContent = playing ? '⏸' : '▶';
  art.classList.toggle('playing', playing);
}

function togglePlay() {
  if (!audio.src) loadTrack(0, false);
  if (isPlaying) { audio.pause(); setPlaying(false); }
  else { audio.play().then(() => setPlaying(true)).catch(() => {}); }
}

function renderPlaylist() {
  playlistEl.innerHTML = TRACKS.map((t, i) => `
    <div class="playlist-item ${i === currentIndex ? 'active' : ''}" data-index="${i}">
      <span>${t.title} — ${t.artist}</span>
      <span class="pi-dur">${i === currentIndex ? (isPlaying ? '♫' : '') : ''}</span>
    </div>
  `).join('');
}

audio.addEventListener('loadedmetadata', () => {
  durationTimeEl.textContent = formatTime(audio.duration);
});
audio.addEventListener('timeupdate', () => {
  if (audio.duration) {
    progressBar.value = (audio.currentTime / audio.duration) * 100;
    currentTimeEl.textContent = formatTime(audio.currentTime);
  }
});
audio.addEventListener('ended', () => loadTrack(currentIndex + 1, true));

progressBar.addEventListener('input', () => {
  if (audio.duration) audio.currentTime = (progressBar.value / 100) * audio.duration;
});

volumeBar.addEventListener('input', () => {
  audio.volume = volumeBar.value / 100;
  volIcon.textContent = volumeBar.value == 0 ? '🔇' : volumeBar.value < 50 ? '🔉' : '🔊';
});

playBtn.addEventListener('click', togglePlay);
document.getElementById('nextBtn').addEventListener('click', () => loadTrack(currentIndex + 1, isPlaying));
document.getElementById('prevBtn').addEventListener('click', () => loadTrack(currentIndex - 1, isPlaying));

playlistToggle.addEventListener('click', () => playlistEl.classList.toggle('open'));
playlistEl.addEventListener('click', e => {
  const item = e.target.closest('.playlist-item');
  if (!item) return;
  loadTrack(Number(item.dataset.index), true);
});

audio.volume = 0.7;
loadTrack(0, false);