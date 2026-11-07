import { AbsoluteFill, interpolate, spring, useCurrentFrame, useVideoConfig, Easing } from "remotion";
import { C, DISPLAY, SERIF, MONO, clamp } from "./theme";

/* Les sept blocs du parcours (snt/ia/plan.html) */
export const BLOCS = [
  { titre: "DÉCOUVRIR L'IA", q: "OÙ EN EST VRAIMENT L'IA ?", anim: "coupures" },
  { titre: "LES MODÈLES GÉNÉRATIFS", q: "COMMENT UNE MACHINE ÉCRIT-ELLE UNE PHRASE ?", anim: "tokens" },
  { titre: "COMMENT UNE IA APPREND", q: "D'OÙ VIENT CE QU'ELLE SAIT ?", anim: "neurone" },
  { titre: "CONNECTER L'IA AU MONDE", q: "OÙ VA-T-ELLE CHERCHER L'INFORMATION ?", anim: "carte" },
  { titre: "TRAVAILLER AVEC UNE IA", q: "UN PARTENAIRE, PAS UN DISTRIBUTEUR DE RÉPONSES.", anim: "dialogue" },
  { titre: "L'IA ET NOTRE MONDE NUMÉRIQUE", q: "QUI CHOISIT CE QUE JE VOIS ?", anim: "fil" },
  { titre: "QUELS CHOIX FACE À L'IA ?", q: "QUEL RAPPORT JE VEUX AVOIR AVEC CES OUTILS ?", anim: "choix" },
];

const sp = (f, at, fps, cfg = { damping: 15, stiffness: 170 }) =>
  f < at ? 0 : spring({ frame: f - at, fps, config: cfg });

/* ---------------- mini-animations (boîte 600 × 600) ---------------- */

const Coupures = ({ f, fps, th }) => {
  const items = [
    { x: 30, y: 60, r: -4, t: "UNE IA RÉUSSIT LE BAC", at: 4 },
    { x: 150, y: 230, r: 3, t: "ELLE CODE UN SITE EN 1 MIN", at: 10 },
    { x: 60, y: 400, r: -2, t: "VRAI ? FAUX ? EXAGÉRÉ ?", at: 16, alarm: true },
  ];
  return items.map((it, i) => {
    const s = sp(f, it.at, fps);
    return (
      <div
        key={i}
        style={{
          position: "absolute", left: it.x, top: it.y, width: 420, padding: "18px 22px",
          background: th.dark ? "#2a251e" : C.paper2, border: `1px solid ${th.line}`,
          boxShadow: "4px 5px 0 rgba(0,0,0,.18)",
          transform: `translateY(${(1 - s) * -60}px) rotate(${it.r}deg)`, opacity: Math.min(1, s * 2),
        }}
      >
        <div style={{ fontFamily: MONO, fontSize: 16, letterSpacing: "0.15em", color: th.muted, borderBottom: `1px solid ${th.line}`, paddingBottom: 6, marginBottom: 8 }}>
          ACTUALITÉ · IA
        </div>
        <div style={{ fontFamily: DISPLAY, fontSize: 34, lineHeight: 1, color: it.alarm ? C.alarm : th.fg }}>{it.t}</div>
      </div>
    );
  });
};

const Tokens = ({ f, fps, th }) => {
  const parts = [["PRÉ", 3412], ["DIC", 1207], ["TION", 562]];
  const split = sp(f, 14, fps);
  const ids = interpolate(f, [26, 36], [0, 1], clamp);
  return (
    <div style={{ position: "absolute", top: 210, left: 0, right: 0, display: "flex", justifyContent: "center" }}>
      {parts.map(([p, id], i) => (
        <div key={p} style={{ margin: `0 ${split * 8}px`, textAlign: "center" }}>
          <div
            style={{
              fontFamily: DISPLAY, fontSize: 72, color: th.fg, padding: `6px ${split * 10}px`,
              border: `4px solid ${split > 0.05 ? th.accent : "transparent"}`,
              background: split > 0.05 ? (th.dark ? "rgba(31,92,255,.15)" : "rgba(31,92,255,.08)") : "transparent",
            }}
          >
            {p}
          </div>
          <div style={{ fontFamily: MONO, fontWeight: 700, fontSize: 30, color: th.accent, marginTop: 18, opacity: ids }}>
            #{id}
          </div>
        </div>
      ))}
    </div>
  );
};

const Neurone = ({ f, fps, th }) => {
  const bits = "01001001 01000001"; // « IA » en ASCII
  const shown = Math.floor(interpolate(f, [2, 22], [0, bits.length], clamp));
  const w = [0.42, -1.3, 0.87].map((v, i) => v + 0.6 * Math.sin((f - 20) / 9 + i) * interpolate(f, [24, 30], [0, 1], clamp));
  const ins = [140, 300, 460];
  const s = sp(f, 10, fps);
  return (
    <>
      <div style={{ position: "absolute", left: 0, right: 0, textAlign: "center", fontFamily: MONO, fontWeight: 700, fontSize: 40, letterSpacing: "0.06em", color: th.fg, top: -40 }}>
        {bits.slice(0, shown)}
        <span style={{ color: th.muted }}><br />{shown >= bits.length ? "= « IA »" : " "}</span>
      </div>
      <svg width="600" height="600" style={{ position: "absolute", left: 0, top: 0, opacity: s }}>
        {ins.map((y, i) => (
          <g key={i}>
            <line x1="90" y1={y} x2="420" y2="300" stroke={th.fg} strokeWidth={2 + Math.abs(w[i]) * 5} opacity={w[i] > 0 ? 0.9 : 0.4} />
            <circle cx="90" cy={y} r="34" fill={th.bg} stroke={th.fg} strokeWidth="5" />
            <text x={250} y={(y + 300) / 2 - 14} fill={th.accent} fontFamily="Courier New" fontWeight="700" fontSize="28" textAnchor="middle">
              {(w[i] >= 0 ? "+" : "") + w[i].toFixed(2)}
            </text>
          </g>
        ))}
        <circle cx="420" cy="300" r="62" fill={th.accent} />
        <text x="420" y="314" fill={C.paper} fontFamily="Courier New" fontWeight="700" fontSize="40" textAnchor="middle">Σ</text>
        <line x1="482" y1="300" x2="570" y2="300" stroke={th.fg} strokeWidth="6" />
        <polygon points="570,288 592,300 570,312" fill={th.fg} />
      </svg>
    </>
  );
};

const Carte = ({ f, fps, th }) => {
  const pts = [
    ["chat", 120, 150], ["lion", 300, 100], ["tigre", 320, 260], ["chien", 100, 360],
    ["train", 450, 420], ["vélo", 500, 330], ["bus", 400, 500],
    ["pizza", 470, 120], ["pain", 520, 200],
  ];
  const q = sp(f, 18, fps);
  const ring = interpolate(f, [24, 44], [0, 135], { ...clamp, easing: Easing.out(Easing.cubic) });
  const qx = 220, qy = 190;
  const near = ["chat", "lion", "tigre"];
  return (
    <svg width="600" height="600" style={{ position: "absolute", inset: 0 }}>
      <rect x="10" y="10" width="580" height="580" fill="none" stroke={th.line} strokeWidth="2" strokeDasharray="6 8" />
      {pts.map(([n, x, y], i) => {
        const s = sp(f, 2 + i * 1.5, fps);
        const hit = near.includes(n) && f > 40;
        return (
          <g key={n} opacity={s}>
            {hit && <line x1={qx} y1={qy} x2={x} y2={y} stroke={th.accent} strokeWidth="4" />}
            <circle cx={x} cy={y} r={hit ? 14 : 10} fill={hit ? th.accent : th.fg} />
            <text x={x + 18} y={y + 8} fill={hit ? th.accent : th.fg} fontFamily="Georgia" fontStyle="italic" fontSize="28">{n}</text>
          </g>
        );
      })}
      <circle cx={qx} cy={qy} r={ring} fill="none" stroke={th.accent} strokeWidth="3" opacity={0.8} />
      <g opacity={q} transform={`translate(${qx} ${qy}) scale(${q})`}>
        <rect x="-16" y="-16" width="32" height="32" fill={C.alarm} transform="rotate(45)" />
      </g>
      <text x={qx - 45} y={qy + 62} fill={C.alarm} fontFamily="Courier New" fontWeight="700" fontSize="26" opacity={q} textAnchor="middle">
        « félin ? »
      </text>
    </svg>
  );
};

const Dialogue = ({ f, fps, th }) => {
  const msgs = [
    { me: true, t: "Fais mon exercice.", at: 2 },
    { me: false, t: "D'abord : qu'as-tu essayé ?", at: 16 },
    { me: true, t: "… ah, je vois mon erreur !", at: 34 },
  ];
  return (
    <div style={{ position: "absolute", top: 90, left: 0, right: 0 }}>
      {msgs.map((m, i) => {
        const s = sp(f, m.at, fps);
        return (
          <div key={i} style={{ display: "flex", justifyContent: m.me ? "flex-end" : "flex-start", marginBottom: 34 }}>
            <div
              style={{
                maxWidth: 440, padding: "20px 26px", fontFamily: SERIF, fontSize: 36, lineHeight: 1.2,
                background: m.me ? th.fg : th.accent, color: m.me ? th.bg : C.paper,
                borderRadius: m.me ? "26px 26px 4px 26px" : "26px 26px 26px 4px",
                opacity: Math.min(1, s * 2), transform: `scale(${0.7 + 0.3 * s})`,
                transformOrigin: m.me ? "right bottom" : "left bottom",
              }}
            >
              {m.t}
            </div>
          </div>
        );
      })}
    </div>
  );
};

const Fil = ({ f, fps, th }) => {
  const scroll = interpolate(f, [0, 34], [0, 806], { ...clamp, easing: Easing.out(Easing.cubic) });
  const titles = ["VIDÉO DE CHATS", "MATCH EN DIRECT", "RECETTE EXPRESS", "TUTO MAQUILLAGE", "CLIP N°1", "DÉBAT ENFLAMMÉ", "VIDÉO SUGGÉRÉE", "TRAILER FILM", "MÈME DU JOUR", "ASTUCE BAC", "RÉSUMÉ DE MATCH"];
  const pick = 6;
  const stamp = sp(f, 38, fps, { damping: 10, stiffness: 200 });
  return (
    <div style={{ position: "absolute", left: 120, top: 0, width: 360, height: 600, overflow: "hidden", border: `4px solid ${th.fg}`, borderRadius: 36 }}>
      <div style={{ transform: `translateY(${-scroll + 0}px)`, padding: 18 }}>
        {titles.map((t, i) => (
          <div
            key={i}
            style={{
              height: 150, marginBottom: 18, borderRadius: 14, padding: 16, display: "flex", alignItems: "flex-end",
              background: i === pick && f > 36 ? th.accent : th.dark ? "#2a251e" : C.paper2,
              color: i === pick && f > 36 ? C.paper : th.fg, fontFamily: DISPLAY, fontSize: 26,
            }}
          >
            {t}
          </div>
        ))}
      </div>
      {f > 36 && (
        <div
          style={{
            position: "absolute", left: 22, top: 400, padding: "8px 16px", whiteSpace: "nowrap", border: `5px solid ${C.alarm}`, color: C.alarm,
            fontFamily: MONO, fontWeight: 700, fontSize: 28, letterSpacing: "0.06em", background: th.bg,
            transform: `rotate(-8deg) scale(${2 - stamp})`, opacity: Math.min(1, stamp * 2),
          }}
        >
          CHOISI PAR QUI ?
        </div>
      )}
    </div>
  );
};

const Choix = ({ f, fps, th }) => {
  const chips = ["VIE PRIVÉE", "ÉNERGIE", "TRAVAIL", "BIAIS", "AUTONOMIE", "DROITS D'AUTEUR"];
  return (
    <div style={{ position: "absolute", top: 70, left: 20, right: 20, display: "flex", flexWrap: "wrap", gap: 22 }}>
      {chips.map((c, i) => {
        const s = sp(f, 3 + i * 5, fps, { damping: 11, stiffness: 190 });
        return (
          <div
            key={c}
            style={{
              fontFamily: DISPLAY, fontSize: 42, padding: "14px 26px", border: `4px solid ${th.fg}`, color: th.fg,
              transform: `scale(${s}) rotate(${(i % 2 ? 2 : -2) * s}deg)`,
              background: i === 3 ? th.accent : "transparent",
              ...(i === 3 ? { color: C.paper, borderColor: th.accent } : {}),
            }}
          >
            {c}
          </div>
        );
      })}
      <div style={{ width: "100%", fontFamily: SERIF, fontStyle: "italic", fontSize: 44, color: th.muted, marginTop: 20, opacity: interpolate(f, [36, 46], [0, 1], clamp) }}>
        … et c'est vous qui décidez.
      </div>
    </div>
  );
};

const ANIMS = { coupures: Coupures, tokens: Tokens, neurone: Neurone, carte: Carte, dialogue: Dialogue, fil: Fil, choix: Choix };

/* ---------------- un bloc ---------------- */

export const Bloc = ({ i }) => {
  const f = useCurrentFrame();
  const { fps } = useVideoConfig();
  const b = BLOCS[i];
  const dark = i % 2 === 1;
  const th = dark
    ? { dark, bg: C.ink, fg: C.paper, muted: C.mutedDark, accent: C.signal, line: "rgba(233,228,216,.25)" }
    : { dark, bg: C.paper, fg: C.ink, muted: C.muted, accent: C.signal, line: "rgba(20,17,13,.25)" };
  const num = sp(f, 0, fps, { damping: 16, stiffness: 140 });
  const words = b.q.split(" ");
  const Anim = ANIMS[b.anim];
  const drift = interpolate(f, [0, 72], [0, -14]);

  return (
    <AbsoluteFill style={{ background: th.bg, color: th.fg }}>
      {/* numéro géant en filigrane */}
      <div
        style={{
          position: "absolute", left: 90, top: -10, fontFamily: DISPLAY, fontSize: 380, lineHeight: 1,
          color: "transparent", WebkitTextStroke: `3px ${th.line}`,
          transform: `translateX(${(1 - num) * -120 + drift}px)`,
        }}
      >
        0{i + 1}
      </div>
      <div style={{ position: "absolute", left: 140, top: 430, width: 940 }}>
        <div
          style={{
            fontFamily: MONO, fontWeight: 700, fontSize: 26, letterSpacing: "0.22em", color: th.accent,
            opacity: interpolate(f, [2, 8], [0, 1], clamp), marginBottom: 26,
          }}
        >
          BLOC {i + 1} · {b.titre}
        </div>
        <div style={{ fontFamily: DISPLAY, fontSize: 84, lineHeight: 1.0, letterSpacing: "-0.01em" }}>
          {words.map((w, k) => {
            const s = sp(f, 4 + k * 2, fps);
            return (
              <span key={k} style={{ display: "inline-block", marginRight: "0.25em", opacity: Math.min(1, s * 1.8), transform: `translateY(${(1 - s) * 40}px)` }}>
                {w}
              </span>
            );
          })}
        </div>
      </div>
      <div style={{ position: "absolute", left: 1200, top: 240, width: 600, height: 600 }}>
        <Anim f={f} fps={fps} th={th} />
      </div>
      {/* barre de progression 1→7 */}
      <div style={{ position: "absolute", left: 140, right: 140, bottom: 70, display: "flex", gap: 12 }}>
        {BLOCS.map((_, k) => (
          <div key={k} style={{ flex: 1, height: 8, background: k <= i ? th.accent : th.line }} />
        ))}
      </div>
    </AbsoluteFill>
  );
};

/* ---------------- carton « au programme » ---------------- */

export const Programme = () => {
  const f = useCurrentFrame();
  const { fps } = useVideoConfig();
  const s = sp(f, 4, fps, { damping: 12, stiffness: 160 });
  return (
    <AbsoluteFill style={{ background: C.signal, color: C.paper, alignItems: "center", justifyContent: "center" }}>
      <div style={{ fontFamily: MONO, fontWeight: 700, fontSize: 30, letterSpacing: "0.3em", opacity: interpolate(f, [0, 6], [0, 1], clamp) }}>
        AU PROGRAMME
      </div>
      <div style={{ fontFamily: DISPLAY, fontSize: 200, lineHeight: 1, marginTop: 20, whiteSpace: "nowrap", transform: `scale(${0.6 + 0.4 * s})`, opacity: Math.min(1, s * 2) }}>
        7 QUESTIONS.
      </div>
    </AbsoluteFill>
  );
};
