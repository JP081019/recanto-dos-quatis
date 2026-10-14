import { AbsoluteFill, Composition, Img, registerRoot, staticFile, useCurrentFrame } from 'remotion';
export function PropertyFlightFilm(){
  const frame=useCurrentFrame();
  const index=Math.min(71,Math.round(frame/179*71));
  return <AbsoluteFill style={{backgroundColor:'#a9c4ce'}}><Img src={staticFile(`cinema/flight/desktop/${String(index).padStart(3,'0')}.webp`)} style={{width:'100%',height:'100%',objectFit:'cover'}}/></AbsoluteFill>;
}
function Root(){return <Composition id="SobrevooRecanto" component={PropertyFlightFilm} durationInFrames={180} fps={30} width={1280} height={720}/>;}
registerRoot(Root);
