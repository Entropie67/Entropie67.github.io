import { loadFont } from "@remotion/google-fonts/ArchivoBlack";

const { fontFamily: archivo } = loadFont();

/* Palette des diaporamas SNT IA (snt/ia/ressources/intro.html) */
export const C = {
  ink: "#14110d",
  paper: "#e9e4d8",
  paper2: "#ddd6c5",
  signal: "#1f5cff",
  alarm: "#b5301f",
  muted: "#6c6355",
  mutedDark: "#9c9483",
};
export const DISPLAY = `${archivo}, 'Arial Black', Impact, sans-serif`;
export const SERIF = "Georgia, 'Times New Roman', serif";
export const MONO = "'Courier New', ui-monospace, monospace";

export const clamp = { extrapolateLeft: "clamp", extrapolateRight: "clamp" };

/* Textes à adapter */
export const LYCEE = "GYMNASE JEAN STURM";
export const ANNEE = "2026 – 2027";

/* ------------------------------------------------------------------
   Musique : « Le prochain mot » (Suno, version 1), 99,4 BPM.
   Le drop du morceau (23,994 s) tombe sur « MATHS. » (image 405).
   ------------------------------------------------------------------ */
export const FPS = 30;
export const MUSIQUE = { src: "suno-v1.mp3", drop: 23.994, bpm: 99.4 };
const BEAT = (FPS * 60) / MUSIQUE.bpm; // ≈ 18,1 images
export const DROP = 405;
const onBeat = (k) => Math.round(DROP + k * BEAT);
/* décalage de lecture du morceau pour que son drop arrive à DROP */
export const MUSIQUE_DEBUT = Math.round(MUSIQUE.drop * FPS - DROP);

/* Découpage du teaser (30 i/s), calé sur les temps du morceau. */
const BLOC_STARTS = Array.from({ length: 7 }, (_, i) => onBeat(7 + 4 * i));
export const T = {
  probas: { from: 0, dur: 320 },                                 // 0 – 10,7 s  le titre s'écrit tout seul
  renversement: { from: 300, dur: onBeat(4) - 300 },             // 10 – 15,9 s  « pas de la magie, des maths »
  programme: { from: onBeat(4), dur: onBeat(7) - onBeat(4) },    // 15,9 – 17,7 s  « au programme : 7 questions »
  blocs: BLOC_STARTS.map((from, i) => ({ from, dur: onBeat(11 + 4 * i) - from })), // 4 temps par bloc
  fin: { from: onBeat(35), dur: 222 },                           // 34,6 – 42 s  « et le prochain mot ? »
};
export const TOTAL = T.fin.from + T.fin.dur;
