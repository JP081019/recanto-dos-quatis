'use client';
import { useEffect, useRef, useState, type RefObject } from 'react';
export function useFlight(sectionRef:RefObject<HTMLElement|null>,canvasRef:RefObject<HTMLCanvasElement|null>,introRef:RefObject<HTMLDivElement|null>) {
  const [active,setActive]=useState(false),[reduced,setReduced]=useState(false),[mobile,setMobile]=useState(false);
  const phase=useRef(false);
  useEffect(()=>{
    const section=sectionRef.current,surface=canvasRef.current;if(!section||!surface)return;
    const reduce=matchMedia('(prefers-reduced-motion: reduce)'),portrait=matchMedia('(max-width:700px)');
    let disposed=false,cleanup=()=>{},visible=true,currentProgress=0;
    function setPhase(next:boolean){if(next!==phase.current){phase.current=next;setActive(next);}}
    const visibility=new IntersectionObserver(([entry])=>{visible=entry.isIntersecting;setPhase(visible&&(reduce.matches||currentProgress>=.75));});visibility.observe(section);
    function settings(){setReduced(reduce.matches);setMobile(portrait.matches);if(reduce.matches)setPhase(visible);}
    settings();reduce.addEventListener('change',settings);portrait.addEventListener('change',settings);
    if(!reduce.matches)void Promise.all([import('gsap'),import('gsap/ScrollTrigger')]).then(([{gsap},{ScrollTrigger}])=>{
      if(disposed)return;gsap.registerPlugin(ScrollTrigger);
      const ctx=surface.getContext('2d',{alpha:false});if(!ctx)return;
      const cache=new Map<number,HTMLImageElement>(),pending=new Set<number>();
      let index=0,raf=0;
      const directory=portrait.matches?'mobile':'desktop';
      function draw(){raf=0;let frame=cache.get(index);if(!frame&&cache.size)frame=[...cache.entries()].sort((a,b)=>Math.abs(a[0]-index)-Math.abs(b[0]-index))[0][1];if(!frame||!ctx||disposed)return;const scale=Math.max(surface!.width/frame.width,surface!.height/frame.height);ctx.drawImage(frame,(surface!.width-frame.width*scale)/2,(surface!.height-frame.height*scale)/2,frame.width*scale,frame.height*scale);surface!.style.opacity='1';}
      function redraw(){if(!raf)raf=requestAnimationFrame(draw);}
      function load(frame:number){if(frame<0||frame>=72||pending.size>=4||cache.has(frame)||pending.has(frame))return;pending.add(frame);const img=new Image();img.onload=()=>{pending.delete(frame);if(disposed)return;cache.set(frame,img);if(cache.size>12){const farthest=[...cache.keys()].sort((a,b)=>Math.abs(b-index)-Math.abs(a-index))[0];cache.delete(farthest)}redraw();if(!cache.has(index))load(index)};img.onerror=()=>pending.delete(frame);img.src=`/cinema/flight/${directory}/${String(frame).padStart(3,'0')}.webp`;}
      function resize(){const ratio=Math.min(devicePixelRatio||1,1.5);surface!.width=Math.round(surface!.clientWidth*ratio);surface!.height=Math.round(surface!.clientHeight*ratio);redraw();}
      resize();load(0);load(1);load(2);
      function update(progress:number,direction:number){currentProgress=progress;index=Math.round(Math.min(1,progress/.75)*71);load(index);for(let d=1;d<=3;d++)load(index+direction*d);setPhase(visible&&progress>=.75);if(introRef.current){introRef.current.style.opacity=String(Math.max(0,1-Math.max(0,progress-.12)/.18));introRef.current.style.visibility=progress<.3?'visible':'hidden'}redraw();}
      const trigger=ScrollTrigger.create({trigger:section,start:'top top',end:'bottom bottom',onUpdate:self=>update(self.progress,self.direction)});update(trigger.progress,1);
      const observer=new ResizeObserver(resize);observer.observe(surface);
      cleanup=()=>{trigger.kill();observer.disconnect();cancelAnimationFrame(raf);cache.clear();};
    });
    return()=>{disposed=true;cleanup();visibility.disconnect();reduce.removeEventListener('change',settings);portrait.removeEventListener('change',settings);};
  },[sectionRef,canvasRef,introRef,mobile,reduced]);
  return {active,reduced,mobile};
}
