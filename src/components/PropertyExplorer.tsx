'use client';
import dynamic from 'next/dynamic';
import { Component, useCallback, useEffect, useRef, useState, type ReactNode } from 'react';
import { accommodations } from '@/content/site';
import { Icon } from './Icon';
const PropertyCanvas = dynamic(() => import('./PropertyCanvas'), { ssr:false });
type Selection = 'overview' | '01' | '02';
class SceneBoundary extends Component<{children:ReactNode;onFailure:()=>void},{failed:boolean}> {
  state={failed:false};
  static getDerivedStateFromError(){return {failed:true};}
  componentDidCatch(){this.props.onFailure();}
  render(){return this.state.failed?null:this.props.children;}
}
export function PropertyExplorer({ active, reduced, mobile }: { active:boolean;reduced:boolean;mobile:boolean }) {
  const [selection,setSelection]=useState<Selection>('overview');
  const [ready,setReady]=useState(false),[failed,setFailed]=useState(false);
  const [supported,setSupported]=useState(false);
  const markers=useRef<HTMLDivElement>(null);
  useEffect(()=>{
    const canvas=document.createElement('canvas');
    const context=canvas.getContext('webgl2');setSupported(Boolean(context));
    context?.getExtension('WEBGL_lose_context')?.loseContext();
    if(!context)setFailed(true);
  },[]);
  useEffect(()=>{if(!active){setSelection('overview');setReady(false);}},[active]);
  const onReady=useCallback(()=>setReady(true),[]);
  const onFailure=useCallback(()=>{setFailed(true);setReady(false);},[]);
  const onMarkers=useCallback((positions:{id:string;x:number;y:number}[])=>{
    for(const position of positions){
      const element=markers.current?.querySelector<HTMLElement>(`[data-marker="${position.id}"]`);
      if(element)element.style.transform=`translate(${position.x}px,${position.y}px) translate(-50%,-100%)`;
    }
  },[]);
  const current=accommodations.find(a=>a.id===selection);
  function consult(){
    window.dispatchEvent(new CustomEvent('select-accommodation',{detail:current?.id}));
    document.getElementById('reservas')?.scrollIntoView({behavior:reduced?'instant':'smooth'});
  }
  return <div className={`property-explorer ${active?'is-active':''} ${ready?'is-ready':''}`} aria-hidden={!active} inert={!active}>
    <picture className="property-poster"><source media="(max-width:700px)" srcSet="/cinema/flight/mobile/071.webp"/><img src="/cinema/flight/desktop/071.webp" alt="Maquete ilustrativa do Recanto, com telhados vermelhos, caminhos e cursos d’água"/></picture>
    {active&&supported&&!failed?<div className="live-property"><SceneBoundary onFailure={onFailure}><PropertyCanvas selection={selection} reduced={reduced} mobile={mobile} onReady={onReady} onFailure={onFailure} onMarkers={onMarkers}/></SceneBoundary></div>:null}
    <div className="property-markers" ref={markers} style={{visibility:ready&&selection==='overview'?'visible':'hidden'}}>
      {accommodations.map(a=><button key={a.id} data-marker={a.id} onClick={()=>setSelection(a.id as Selection)}><Icon name="house-door"/>{a.name}<Icon name="plus"/></button>)}
    </div>
    <div className="explorer-heading"><p>Conheça por outro ângulo</p><h2>Explore o Recanto.</h2></div>
    <div className="explorer-panel">
      {current?<>
        <div className="panel-heading"><span><Icon name="house-door"/>{current.name}</span><button onClick={()=>setSelection('overview')} aria-label="Voltar à visão geral"><Icon name="x-lg"/></button></div>
        <h3>{current.type}</h3>
        <ul className="room-facts"><li><Icon name="grid"/>4 camas de solteiro</li><li><Icon name="layout-split"/>1 cama de casal grande</li><li><Icon name="droplet"/>Banheiro privativo</li></ul>
        <p className="model-note">Configuração informada no anúncio. Capacidade máxima e correspondência com esta construção a confirmar.</p>
        <a href="#reservas" className="button" onClick={event=>{event.preventDefault();consult();}}>Consultar esta hospedagem <Icon name="whatsapp"/></a>
        <div className="panel-actions"><button onClick={()=>setSelection(selection==='01'?'02':'01')}>Conhecer a outra hospedagem <Icon name="arrow-left-right"/></button><button onClick={()=>setSelection('overview')}><Icon name="arrows-angle-expand"/>Voltar à visão geral</button></div>
      </>:<>
        <p className="panel-invitation">Escolha uma hospedagem para ver seu exterior.</p>
        <div className="property-options">{accommodations.map(a=><button key={a.id} onClick={()=>setSelection(a.id as Selection)}><Icon name="house-door"/><span>{a.name}</span><Icon name="arrow-up-right"/></button>)}</div>
        <p className="model-note">Maquete ilustrativa baseada na foto aérea. Identificação das construções provisória.</p>
        {failed?<p className="model-note" role="status">A visualização 3D não está disponível neste dispositivo. As informações e a consulta continuam acessíveis.</p>:null}
      </>}
    </div>
    <a className="continue-link" href="#recanto">Continuar para conhecer o Recanto <Icon name="arrow-down"/></a>
  </div>;
}
