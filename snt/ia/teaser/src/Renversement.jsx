import { AbsoluteFill, interpolate, spring, useCurrentFrame, useVideoConfig, random, Easing } from "remotion";
import { C, DISPLAY, MONO, clamp } from "./theme";

/* Fond : une nappe de nombres (les « poids » du modèle) qui défile. */
const NumberField = ({ f, glow }) => {
  const cols = 12;
  const rows = 16;
  const scroll = (f * 1.2) % 70;
  const cells = [];
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      const seed = r * 31 + c * 7 + Math.floor(f / 6) * (((r + c) % 5 === 0) ? 1 : 0);
      const v = (random(`n${seed}`) * 4 - 2).toFixed(2);
      const lit = random(`l${r}-${c}`) < 0.08;
      cells.push(
        <span
          key={`${r}-${c}`}
          style={{
            position: "absolute",
            left: c * 166 + (r % 2) * 40 - 20,
            top: r * 70 - scroll,
            fontFamily: MONO,
            fontSize: 26,
            fontWeight: 700,
            color: lit && glow > 0.5 ? C.signal : C.paper,
            opacity: lit ? 0.12 + 0.35 * glow : 0.07 + 0.05 * glow,
          }}
        >
          {v >= 0 ? "+" + v : v}
        </span>
      );
    }
  }
  return <AbsoluteFill style={{ overflow: "hidden" }}>{cells}</AbsoluteFill>;
};

const Pop = ({ f, at, fps, children, style }) => {
  const s = spring({ frame: f - at, fps, config: { damping: 14, stiffness: 170 } });
  if (f < at) return null;
  return (
    <span style={{ display: "inline-block", opacity: Math.min(1, s * 1.6), transform: `translateY(${(1 - s) * 50}px)`, ...style }}>
      {children}
    </span>
  );
};

export const Renversement = () => {
  const f = useCurrentFrame();
  const { fps } = useVideoConfig();
  const reveal = interpolate(f, [0, 18], [0, 150], { ...clamp, easing: Easing.inOut(Easing.cubic) });
  const strike = interpolate(f, [70, 82], [0, 1], { ...clamp, easing: Easing.out(Easing.cubic) });
  const glow = interpolate(f, [100, 130], [0, 1], clamp);
  const dim = interpolate(f, [86, 96], [1, 0.35], clamp);
  const big = { fontFamily: DISPLAY, fontSize: 150, lineHeight: 0.95, letterSpacing: "-0.015em", textTransform: "uppercase" };

  return (
    <AbsoluteFill style={{ background: C.ink, clipPath: `circle(${reveal}% at 50% 50%)` }}>
      <NumberField f={f} glow={glow} />
      <AbsoluteFill
        style={{
          background: "radial-gradient(ellipse at 40% 50%, rgba(20,17,13,.92) 0%, rgba(20,17,13,.6) 50%, transparent 80%)",
        }}
      />
      <div style={{ position: "absolute", left: 140, top: 150, color: C.paper }}>
        <div
          style={{
            fontFamily: MONO, fontSize: 24, fontWeight: 700, letterSpacing: "0.3em", color: C.signal,
            opacity: interpolate(f, [12, 22], [0, 1], clamp), marginBottom: 30,
          }}
        >
          SOUS LE CAPOT
        </div>
        <div style={{ ...big, opacity: dim }}>
          <Pop f={f} at={16} fps={fps}>CE N'EST PAS</Pop>
          <br />
          <Pop f={f} at={26} fps={fps} style={{ position: "relative" }}>
            DE LA MAGIE.
            <span
              style={{
                position: "absolute", left: -10, right: -10, top: "48%", height: 18,
                background: C.alarm, transform: `scaleX(${strike}) rotate(-2deg)`, transformOrigin: "left",
              }}
            />
          </Pop>
        </div>
        <div style={{ ...big, marginTop: 40 }}>
          <Pop f={f} at={94} fps={fps}>CE SONT DES</Pop>
          <br />
          <Pop
            f={f}
            at={105}
            fps={fps}
            style={{
              color: C.signal,
              textShadow: `0 0 ${30 * glow}px rgba(31,92,255,.8), 0 0 ${80 * glow}px rgba(31,92,255,.4)`,
            }}
          >
            MATHS.
          </Pop>
        </div>
      </div>
    </AbsoluteFill>
  );
};
