import { AbsoluteFill, Sequence, Audio, staticFile, interpolate, useCurrentFrame } from "remotion";
import { T, TOTAL, clamp, MUSIQUE_DEBUT } from "./theme";
import { Probas } from "./Probas";
import { Renversement } from "./Renversement";
import { Bloc, BLOCS, Programme } from "./Blocs";
import { Fin } from "./Fin";

/* Musique : fichier dans teaser/public/, lu à partir de MUSIQUE_DEBUT
   pour que le drop du morceau tombe sur « MATHS. ». */
const Musique = ({ src }) => {
  if (!src) return null;
  return (
    <Audio
      src={staticFile(src)}
      trimBefore={MUSIQUE_DEBUT}
      volume={(f) => interpolate(f, [0, 12, TOTAL - 40, TOTAL - 4], [0, 0.85, 0.85, 0], clamp)}
    />
  );
};

export const Teaser = ({ musique }) => (
  <AbsoluteFill style={{ background: "#14110d" }}>
    <Sequence from={T.probas.from} durationInFrames={T.probas.dur} name="1 · Le titre s'écrit seul">
      <Probas />
    </Sequence>
    <Sequence from={T.renversement.from} durationInFrames={T.renversement.dur} name="2 · Pas de magie, des maths">
      <Renversement />
    </Sequence>
    <Sequence from={T.programme.from} durationInFrames={T.programme.dur} name="3 · Au programme">
      <Programme />
    </Sequence>
    {BLOCS.map((b, i) => (
      <Sequence key={i} from={T.blocs[i].from} durationInFrames={T.blocs[i].dur} name={`Bloc ${i + 1}`}>
        <Bloc i={i} />
      </Sequence>
    ))}
    <Sequence from={T.fin.from} durationInFrames={T.fin.dur} name="4 · Et le prochain mot ?">
      <Fin />
    </Sequence>
    <Musique src={musique} />
  </AbsoluteFill>
);
