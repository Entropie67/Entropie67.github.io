import {
  AbsoluteFill,
  interpolate,
  spring,
  useCurrentFrame,
  useVideoConfig,
  Easing,
} from "remotion";
import { C, DISPLAY, SERIF, MONO, clamp } from "./theme";

/* ------------------------------------------------------------------
   Scénario : le titre s'écrit mot à mot, chaque mot suivant est tiré
   au sort parmi des candidats affichés avec leur probabilité.
   Trois tours, de plus en plus rapides ; le dernier ne choisit PAS
   le mot le plus probable (échantillonnage).
   ------------------------------------------------------------------ */
const BASE = [
  { w: "L'INTELLIGENCE", at: 14 },
  { w: "ARTIFICIELLE", at: 24 },
  { w: "VA", at: 34 },
];

const ROUNDS = [
  {
    start: 62, scanStart: 92, scanEnd: 128, out: 146, steps: 10, pick: 0,
    cands: [["CHANGER", 41], ["REMPLACER", 23], ["NOUS", 9], ["TOUT", 7]],
  },
  {
    start: 150, scanStart: 166, scanEnd: 184, out: 198, steps: 7, pick: 0,
    cands: [["NOS", 38], ["LE", 27], ["LA", 18], ["CE", 6]],
  },
  {
    start: 202, scanStart: 216, scanEnd: 236, out: 254, steps: 7, pick: 2,
    cands: [["VIES", 52], ["MÉTIERS", 20], ["COURS", 11], ["ÉCOLES", 5]],
    surprise: true,
  },
];
const END_DOT = 244;
const CAPTION = 258;


/* index de la ligne surlignée pendant l'hésitation (ralentit puis se fige) */
const scanIndex = (r, f) => {
  if (f < r.scanStart) return -1;
  const n = r.steps;
  const len = r.cands.length;
  let k = 0;
  for (let i = 0; i < n; i++) {
    const t = r.scanStart + (r.scanEnd - r.scanStart) * Math.pow(i / (n - 1), 2);
    if (t <= f) k = i;
  }
  return (((r.pick - (n - 1 - k)) % len) + len) % len;
};

export const Grain = () => (
  <AbsoluteFill
    style={{
      backgroundImage: `
        radial-gradient(circle at 20% 30%, rgba(0,0,0,.05) 0, transparent 40%),
        radial-gradient(circle at 80% 70%, rgba(0,0,0,.06) 0, transparent 45%),
        repeating-linear-gradient(0deg, rgba(0,0,0,.018) 0 1px, transparent 1px 3px)`,
      mixBlendMode: "multiply",
      pointerEvents: "none",
    }}
  />
);

export const Masthead = ({ f }) => {
  const draw = interpolate(f, [0, 16], [0, 1], { ...clamp, easing: Easing.out(Easing.cubic) });
  const txt = interpolate(f, [8, 20], [0, 1], clamp);
  const item = { fontFamily: MONO, fontSize: 22, letterSpacing: "0.22em", fontWeight: 700 };
  return (
    <div style={{ position: "absolute", top: 56, left: 140, right: 140 }}>
      <div style={{ height: 8, background: C.ink, transform: `scaleX(${draw})`, transformOrigin: "left" }} />
      <div
        style={{
          display: "flex", justifyContent: "space-between", padding: "14px 0",
          opacity: txt, color: C.ink,
        }}
      >
        <span style={item}>SNT · INTELLIGENCE ARTIFICIELLE</span>
        <span style={{ ...item, color: C.muted }}>ÉDITION SPÉCIALE</span>
        <span style={item}>SECONDE · 2026</span>
      </div>
      <div style={{ height: 2, background: C.ink, transform: `scaleX(${draw})`, transformOrigin: "right" }} />
    </div>
  );
};

const Word = ({ text, at, f, fps, chosen }) => {
  if (f < at) return null;
  const s = spring({ frame: f - at, fps, config: { damping: 14, stiffness: 180 } });
  const scale = chosen ? interpolate(s, [0, 1], [1.35, 1]) : 1;
  const y = chosen ? 0 : interpolate(s, [0, 1], [40, 0]);
  const blue = chosen ? interpolate(f - at, [0, 14], [1, 0], clamp) : 0;
  return (
    <span
      style={{
        display: "inline-block",
        marginRight: "0.28em",
        transform: `translateY(${y}px) scale(${scale})`,
        transformOrigin: "left bottom",
        opacity: Math.min(1, s * 1.5),
        color: blue > 0.5 ? C.signal : C.ink,
      }}
    >
      {text}
    </span>
  );
};

const Headline = ({ f, fps }) => {
  const words = [...BASE.map((b) => ({ ...b, chosen: false }))];
  ROUNDS.forEach((r) => {
    let w = r.cands[r.pick][0];
    if (r.surprise) w = f >= END_DOT ? w + "." : w;
    words.push({ w, at: r.scanEnd + 4, chosen: true });
  });
  const visible = words.filter((w) => f >= w.at);
  const choosing = ROUNDS.some((r) => f >= r.start && f < r.scanEnd + 4);
  const blinkOn = choosing || Math.floor(f / 9) % 2 === 0;
  const showCursor = f >= 38 && f < END_DOT;
  return (
    <div
      style={{
        position: "absolute", top: 196, left: 140, right: 140,
        fontFamily: DISPLAY, fontSize: 112, lineHeight: 1.0, letterSpacing: "-0.01em",
        color: C.ink,
      }}
    >
      {visible.map((w, i) => (
        <Word key={i} text={w.w} at={w.at} f={f} fps={fps} chosen={w.chosen} />
      ))}
      {showCursor && (
        <span
          style={{
            display: "inline-block", width: 52, height: 92, verticalAlign: "-6px",
            background: C.signal, opacity: blinkOn ? 1 : 0,
          }}
        />
      )}
    </div>
  );
};

const Panel = ({ r, f, fps }) => {
  if (f < r.start || f > r.out + 2) return null;
  const inS = spring({ frame: f - r.start, fps, config: { damping: 18, stiffness: 160 } });
  const outT = interpolate(f, [r.out - 8, r.out], [0, 1], clamp);
  const hi = scanIndex(r, f);
  const decided = f >= r.scanEnd;
  const quick = r.start > 100;

  return (
    <div
      style={{
        position: "absolute", top: 600, left: 140, width: 1180,
        opacity: inS * (1 - outT),
        transform: `translateY(${interpolate(inS, [0, 1], [30, 0]) - outT * 20}px)`,
      }}
    >
      <div
        style={{
          fontFamily: MONO, fontSize: 22, fontWeight: 700, letterSpacing: "0.2em",
          color: C.muted, borderBottom: `2px solid ${C.ink}`, paddingBottom: 10, marginBottom: 6,
          display: "flex", justifyContent: "space-between",
        }}
      >
        <span>MOT SUIVANT ?</span>
        <span>PROBABILITÉ</span>
      </div>
      {r.cands.map(([w, p], i) => {
        const grow = interpolate(f, [r.start + 4 + i * 3, r.start + (quick ? 14 : 24) + i * 3], [0, 1], {
          ...clamp, easing: Easing.out(Easing.cubic),
        });
        const isHi = hi === i;
        const isPick = decided && i === r.pick;
        const fade = decided && !isPick ? 0.25 : 1;
        const fg = isHi ? C.paper : C.ink;
        return (
          <div
            key={w}
            style={{
              display: "flex", alignItems: "center", height: 82, padding: "0 18px",
              background: isHi ? C.signal : "transparent",
              borderBottom: `1px solid rgba(20,17,13,.25)`,
              opacity: fade,
              position: "relative",
            }}
          >
            <span style={{ fontFamily: DISPLAY, fontSize: 48, width: 380, color: fg }}>{w}</span>
            <div style={{ flex: 1, height: 26, background: isHi ? "rgba(233,228,216,.25)" : C.paper2 }}>
              <div style={{ width: `${(p / 60) * 100 * grow}%`, height: "100%", background: isHi ? C.paper : C.ink }} />
            </div>
            <span
              style={{
                fontFamily: MONO, fontWeight: 700, fontSize: 40, width: 150, textAlign: "right", color: fg,
              }}
            >
              {Math.round(p * grow)} %
            </span>
            {isPick && r.surprise && (
              <span
                style={{
                  position: "absolute", left: "100%", marginLeft: 28, whiteSpace: "nowrap",
                  fontFamily: SERIF, fontStyle: "italic", fontSize: 38, color: C.alarm,
                  opacity: interpolate(f, [r.scanEnd + 2, r.scanEnd + 8], [0, 1], clamp),
                  transform: `rotate(-3deg)`,
                }}
              >
                ← pas le plus probable !
              </span>
            )}
          </div>
        );
      })}
      <div style={{ fontFamily: MONO, fontSize: 20, color: C.muted, marginTop: 12, letterSpacing: "0.08em" }}>
        + 49 996 autres mots possibles…
      </div>
    </div>
  );
};

const Caption = ({ f }) => {
  if (f < CAPTION) return null;
  const t = interpolate(f, [CAPTION, CAPTION + 12], [0, 1], { ...clamp, easing: Easing.out(Easing.cubic) });
  const line = interpolate(f, [CAPTION + 8, CAPTION + 26], [0, 1], { ...clamp, easing: Easing.inOut(Easing.cubic) });
  return (
    <div style={{ position: "absolute", top: 640, left: 140, right: 140, opacity: t, transform: `translateY(${(1 - t) * 24}px)` }}>
      <div style={{ display: "inline-block" }}>
        <div style={{ fontFamily: MONO, fontWeight: 700, fontSize: 54, letterSpacing: "0.1em", color: C.ink }}>
          CHAQUE MOT A ÉTÉ TIRÉ AU SORT.
        </div>
        <div style={{ height: 8, background: C.signal, marginTop: 16, transform: `scaleX(${line})`, transformOrigin: "left" }} />
      </div>
      <div style={{ fontFamily: SERIF, fontStyle: "italic", fontSize: 60, color: C.muted, marginTop: 28 }}>
        selon des probabilités. Comme une IA.
      </div>
    </div>
  );
};

export const Probas = () => {
  const f = useCurrentFrame();
  const { fps } = useVideoConfig();
  const push = interpolate(f, [0, 300], [1, 1.035]);
  return (
    <AbsoluteFill style={{ background: C.paper }}>
      <AbsoluteFill style={{ transform: `scale(${push})` }}>
        <Masthead f={f} />
        <Headline f={f} fps={fps} />
        {ROUNDS.map((r, i) => (
          <Panel key={i} r={r} f={f} fps={fps} />
        ))}
        <Caption f={f} />
      </AbsoluteFill>
      <Grain />
    </AbsoluteFill>
  );
};
