import { Fragment } from "react";
import { AbsoluteFill, interpolate, spring, useCurrentFrame, useVideoConfig, Easing } from "remotion";
import { C, DISPLAY, SERIF, MONO, clamp, LYCEE, ANNEE } from "./theme";
import { Masthead, Grain } from "./Probas";

/* Écran final : on rejoue le mécanisme du début, mais c'est au
   spectateur de choisir le prochain mot. */
export const Fin = () => {
  const f = useCurrentFrame();
  const { fps } = useVideoConfig();
  const pop = (at) => (f < at ? 0 : spring({ frame: f - at, fps, config: { damping: 14, stiffness: 170 } }));
  const words = [["ET", 8], ["LE", 14], ["PROCHAIN", 20], ["MOT", 28], ["?", 34]];
  const rule = interpolate(f, [56, 76], [0, 1], { ...clamp, easing: Easing.inOut(Easing.cubic) });
  const sub = interpolate(f, [66, 80], [0, 1], clamp);
  const tag = interpolate(f, [90, 104], [0, 1], clamp);
  const blink = Math.floor(f / 12) % 2 === 0;
  const fadeOut = interpolate(f, [206, 222], [0, 1], clamp);

  return (
    <AbsoluteFill style={{ background: C.paper }}>
      <Masthead f={f} />
      <div style={{ position: "absolute", left: 140, top: 250, fontFamily: DISPLAY, fontSize: 150, lineHeight: 1.0, letterSpacing: "-0.015em", color: C.ink }}>
        {words.map(([w, at]) => {
          const s = pop(at);
          return (
            <Fragment key={w}>
            {w === "MOT" && <br />}
            <span
              key={w + "s"}
              style={{
                display: "inline-block", marginRight: "0.22em", opacity: Math.min(1, s * 1.8),
                transform: `translateY(${(1 - s) * 50}px)`, color: w === "?" ? C.signal : C.ink,
              }}
            >
              {w}
            </span>
            </Fragment>
          );
        })}
        {f > 40 && (
          <span style={{ display: "inline-block", width: 64, height: 120, verticalAlign: "-10px", background: C.signal, opacity: blink ? 1 : 0 }} />
        )}
      </div>
      <div style={{ position: "absolute", left: 140, right: 140, top: 720 }}>
        <div style={{ height: 8, background: C.ink, transform: `scaleX(${rule})`, transformOrigin: "left" }} />
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginTop: 30, opacity: sub, transform: `translateY(${(1 - sub) * 20}px)` }}>
          <span style={{ fontFamily: DISPLAY, fontSize: 64, color: C.ink }}>SNT · INTELLIGENCE ARTIFICIELLE</span>
          <span style={{ fontFamily: MONO, fontWeight: 700, fontSize: 30, letterSpacing: "0.14em", color: C.ink }}>SECONDE</span>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", marginTop: 22, opacity: tag }}>
          <span style={{ fontFamily: SERIF, fontStyle: "italic", fontSize: 44, color: C.muted }}>
            Comprendre l'IA de l'intérieur. Sans magie.
          </span>
          <span style={{ fontFamily: MONO, fontWeight: 700, fontSize: 30, letterSpacing: "0.14em", color: C.muted }}>
            {LYCEE} · {ANNEE}
          </span>
        </div>
      </div>
      <Grain />
      <AbsoluteFill style={{ background: C.ink, opacity: fadeOut }} />
    </AbsoluteFill>
  );
};
