'use client';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import { photographs } from '@/content/site';
import { Icon } from './Icon';
export function Gallery() {
  const [selected, setSelected] = useState(0);
  const dialog = useRef<HTMLDialogElement>(null);
  const touch = useRef(0);
  const track = useRef<HTMLDivElement>(null);
  function move(direction: number) { setSelected(value => (value + direction + photographs.length) % photographs.length); }
  useEffect(() => {
    const element = dialog.current;
    if (!element) return;
    function keyboard(event: KeyboardEvent) { if (event.key === 'ArrowLeft') move(-1); if (event.key === 'ArrowRight') move(1); }
    element.addEventListener('keydown', keyboard);
    return () => element.removeEventListener('keydown', keyboard);
  }, []);
  const image = photographs[selected];
  return <section className="gallery section" id="galeria">
    <div className="section-heading"><div><p className="eyebrow"><Icon name="images"/> Agora, em fotografias</p><h2>Conheça o Recanto<br/>de verdade.</h2></div><div className="gallery-controls"><button aria-label="Ver fotografias anteriores" onClick={() => track.current?.scrollBy({ left: -600, behavior: 'smooth' })}><Icon name="chevron-left"/></button><button aria-label="Ver próximas fotografias" onClick={() => track.current?.scrollBy({ left: 600, behavior: 'smooth' })}><Icon name="chevron-right"/></button></div></div>
    <div className="gallery-track" ref={track}>{photographs.map((photo, index) => <button className="gallery-item" key={photo.id} onClick={() => { setSelected(index); dialog.current?.showModal(); }} aria-label={`Ampliar: ${photo.caption}`}><div className="gallery-image"><Image src={`/images/img${photo.id}.jpg`} alt={photo.alt} fill sizes="(max-width: 700px) 85vw, 45vw" style={{objectFit:'contain'}}/></div><span>{photo.caption}<Icon name="fullscreen"/></span></button>)}</div>
    <dialog className="lightbox" ref={dialog} aria-label="Galeria de fotografias" onClick={e => { if (e.target === e.currentTarget) dialog.current?.close(); }} onTouchStart={e => { touch.current = e.touches[0].clientX; }} onTouchEnd={e => { const distance = touch.current - e.changedTouches[0].clientX; if (Math.abs(distance) > 60) move(distance > 0 ? 1 : -1); }}>
      <button className="lightbox-close" onClick={() => dialog.current?.close()} autoFocus aria-label="Fechar fotografia">Fechar <Icon name="x-lg"/></button>
      <div className="lightbox-image"><Image src={`/images/img${image.id}.jpg`} alt={image.alt} fill sizes="95vw" style={{ objectFit: 'contain' }} /></div>
      <div className="lightbox-bottom"><button onClick={() => move(-1)} aria-label="Fotografia anterior"><Icon name="chevron-left"/></button><p aria-live="polite">{image.caption} <small>{selected + 1} / {photographs.length}</small></p><button onClick={() => move(1)} aria-label="Próxima fotografia"><Icon name="chevron-right"/></button></div>
    </dialog>
  </section>;
}
