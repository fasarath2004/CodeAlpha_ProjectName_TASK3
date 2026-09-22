# Waveform — Music Player

A sleek, fully responsive **web music player** built with vanilla **HTML5, CSS3, and JavaScript**. It streams real Tamil songs directly in the browser with play/pause, previous/next, seek bar, volume control, and an expandable playlist.

> **CodeAlpha Internship — Task 4: Music Player**

---

## ✨ Features

- 🎵 **Plays 13 Tamil songs** — streams audio in the browser (no downloads needed)
- ⏯️ **Play / Pause** — gradient play button that toggles state
- ⏮ ⏭ **Previous / Next** — skip through the playlist, with auto-loop at the ends
- 🎚️ **Seek bar** — click or drag to jump to any part of the song; shows live time progress
- 🔊 **Volume slider** — mute / low / high icons update automatically
- 📜 **Playlist panel** — expand/collapse, click any song to play it, active song is highlighted
- 💿 **Spinning disc animation** — album artwork rotates while playing
- 📱 **Responsive design** — glassmorphism card scales cleanly on any screen

---

## 🛠️ Technologies Used

| Technology  | Purpose                                     |
|-------------|---------------------------------------------|
| **HTML**    | Page structure (`index.html`)               |
| **CSS**     | Styling, layout, animations (`style.css`)   |
| **JavaScript** | Playback logic, UI handling (`script.js`) |
| **HTMLAudioElement** | Native browser audio streaming engine |

---

## 📁 Project Structure

```
codealpha-task4-music-player/
│
├── index.html        # Page structure & markup
├── style.css         # All styling, colors, animations
├── script.js         # Playlist data + player logic
└── README.md         # This documentation
```

> **Note:** CSS and JS are kept in **separate files** to keep the code clean, reusable, and easy to maintain.

---

## 🚀 How to Run

### Option 1 — Open directly (no install needed)

1. Download / clone this repository.
2. Open `index.html` in any modern browser (Chrome, Edge, Firefox, Safari).
3. Click ▶ and enjoy! 🎶

### Option 2 — Using VS Code (recommended)

1. Open the project folder in **VS Code**.
2. Install the **Live Server** extension.
3. Right-click `index.html` → **Open with Live Server**.
4. The app opens at `http://127.0.0.1:5500`.

> Internet connection is required because songs are **streamed from remote MP3 URLs** (hosted on GitHub's raw content CDN).

---

## 🎧 Playlist

The playlist in `script.js` contains 13 popular Tamil tracks:

| # | Song | Artist |
|---|------|--------|
| 1 | Theru Jaathara | A.R. Rahman |
| 2 | Thaai Kelavi | Anirudh Ravichander |
| 3 | Megham Karukatha | Anirudh Ravichander |
| 4 | Ponni Nadhi | Anirudh Ravichander |
| 5 | Po Indru Neeyaga | Anirudh Ravichander |
| 6 | Poo Nee Poo | Anirudh Ravichander |
| 7 | Thenmozhi | Anirudh Ravichander |
| 8 | Maatna Gaali | Anirudh Ravichander |
| 9 | Life of Pazham | Anirudh Ravichander |
| 10 | Ey Inga Paaru | Anirudh Ravichander |
| 11 | Va Kannamma | Tamil Hits |
| 12 | Velicha Poove Va | Tamil Hits |
| 13 | Vinnaithaandi Varuvaaya | A.R. Rahman |

---

## 🔧 How It Works (Code Walkthrough)

### `index.html`
Builds the player card: top label + playlist toggle button, rotating album art, track title/artist, progress bar, transport controls (⏮ ▶ ⏭), volume row, and a dynamic playlist container. The `<audio>` element is the actual audio engine — `script.js` controls it.

### `style.css`
- Uses **CSS custom properties** (variables like `--pink`, `--cyan`, `--bg-1`) for an easy theme.
- `@keyframes spin` rotates the disc; `.art.playing .disc` runs the animation only when audio plays.
- Glassmorphism card: semi-transparent background, `backdrop-filter: blur`, soft shadow, rounded corners.

### `script.js`
- `TRACKS` array holds each song's `title`, `artist`, and streaming `src` URL.
- `loadTrack(index, autoplay)` — loads a track, updates the title/artist, re-renders the playlist, and optionally auto-plays.
- `togglePlay()` — plays or pauses and swaps the ▶/⏸ icon.
- `setPlaying()` — toggles the spinning-disc CSS class.
- `renderPlaylist()` — draws the song list and marks the current track as active.
- Audio events:
  - `loadedmetadata` → shows total duration.
  - `timeupdate` → updates the seek bar and current time.
  - `ended` → automatically plays the next song.
- `progressBar` / `volumeBar` inputs → seek and volume control.
- Playlist click → jumps to that song via its `data-index`.

---

## 🎨 Customization

- **Change playlist:** edit the `TRACKS` array in `script.js` — add/remove songs or replace mp3 URLs.
- **Change colors:** tweak the CSS variables at the top of `style.css`.
- **Change fonts:** update the Google Fonts `<link>` in `index.html` and the `font-family` rules in `style.css`.
- **Autoplay policy:** most browsers block autoplay with sound; the player uses the play button first, then auto-advances after each song ends.

---

## ⚠️ Notes & Credits

- Songs are **streamed for personal/demo/educational use** from publicly shared student demo repos. Replace the `src` URLs with licensed sources for any public / commercial deployment.
- Fonts: **Sora** & **Inter** (Google Fonts).
- The `♬`/`♫` glyphs and transport symbols are Unicode, so no icon library is required.

---

## 📝 License

MIT — free to use, modify, and learn from. **All audio content belongs to its respective copyright owners.**

Made with ❤️ for the **CodeAlpha Internship Program**.