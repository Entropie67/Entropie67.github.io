import { registerRoot, Composition } from "remotion";
import { Probas } from "./Probas";
import { Teaser } from "./Teaser";
import { TOTAL, MUSIQUE } from "./theme";

const Root = () => (
  <>
    {/* Le teaser complet (~42 s). Musique réglée dans theme.js (MUSIQUE) ;
        musique: null pour une version muette. */}
    <Composition
      id="Teaser"
      component={Teaser}
      durationInFrames={TOTAL}
      fps={30}
      width={1920}
      height={1080}
      defaultProps={{ musique: MUSIQUE.src }}
    />
    {/* La scène des probabilités seule (prototype 10 s) */}
    <Composition
      id="Probas"
      component={Probas}
      durationInFrames={300}
      fps={30}
      width={1920}
      height={1080}
    />
  </>
);

registerRoot(Root);
