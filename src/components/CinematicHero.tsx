'use client';
import { useRef } from 'react';
import { useFlight } from '@/hooks/useFlight';
import { PropertyExplorer } from './PropertyExplorer';
import { Icon } from './Icon';
export function CinematicHero(){
  const root=useRef<HTMLElement>(null),canvas=useRef<HTMLCanvasElement>(null),intro=useRef<HTMLDivElement>(null);
  const {active,reduced,mobile}=useFlight(root,canvas,intro);
  return <section className={`cinematic flight-hero ${active?'is-exploring':''}`} id="inicio" ref={root} aria-label="Sobrevoo até o Recanto dos Quatis">
    <div className="hero-sticky">
      <picture className="flight-poster"><source media="(max-width:700px)" srcSet="/cinema/flight/mobile/000.webp" /><img src="/cinema/flight/desktop/000.webp" alt="Paisagem 3D de montanhas e vegetação, acima da maquete do Recanto" fetchPriority="high" /></picture>
      <canvas ref={canvas} className="forest-canvas" aria-hidden="true" />
      <div className="hero-shade" />
      <div className="hero-intro" ref={intro}><p className="hero-kicker"><Icon name="geo-alt" />Urubici, Santa Catarina</p><h1>Recanto<br />dos Quatis</h1><p className="hero-description">Uma experiência que começa<br />antes da chegada.</p><span className="emotional">Viva momentos especiais.</span><a className="text-link" href="#hospedagens">Explore as hospedagens <Icon name="arrow-up-right" /></a></div>
      <PropertyExplorer active={active||reduced} reduced={reduced} mobile={mobile} />
      {!active&&!reduced?<div className="hero-bottom"><span>Natureza, arquitetura e hospitalidade.</span><a href="#hospedagens">Deslize para chegar mais perto <Icon name="arrow-down" /></a><span>Serra Catarinense</span></div>:null}
    </div>
  </section>;
}
