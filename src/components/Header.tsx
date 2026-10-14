'use client';
import { useEffect, useRef, useState } from 'react';
import { Icon } from './Icon';
const links = [['O Recanto', '#recanto'], ['Hospedagens', '#hospedagens'], ['Experiências', '#experiencias'], ['Galeria', '#galeria'], ['Localização', '#localizacao']];
export function Header() {
  const [open, setOpen] = useState(false);
  const menu = useRef<HTMLDialogElement>(null);
  const header = useRef<HTMLElement>(null);
  useEffect(() => {
    const hero = document.getElementById('inicio');
    if (!hero) return;
    const observer = new IntersectionObserver(([entry]) => { header.current?.classList.toggle('header-solid', !entry.isIntersecting); });
    observer.observe(hero);
    return () => observer.disconnect();
  }, []);
  function close() { menu.current?.close(); setOpen(false); }
  return <>
    <a className="skip-link" href="#recanto">Ir para o conteúdo</a>
    <header className="header" ref={header}>
      <a className="wordmark" href="#inicio" aria-label="Recanto dos Quatis, início"><span>Recanto</span><small>dos Quatis</small></a>
      <nav aria-label="Navegação principal">{links.map(([name, href]) => <a key={href} href={href}>{name}</a>)}</nav>
      <a className="button button-small" href="#reservas">Reservar <Icon name="arrow-up-right"/></a>
      <button className="menu-toggle" aria-expanded={open} aria-controls="menu-mobile" onClick={() => { menu.current?.showModal(); setOpen(true); }}>Menu <Icon name="list"/></button>
    </header>
    <dialog className="mobile-menu" id="menu-mobile" ref={menu} onClose={() => setOpen(false)} onClick={e => { if (e.target === e.currentTarget) close(); }}>
      <button className="menu-close" onClick={close} autoFocus>Fechar <Icon name="x-lg"/></button>
      <nav aria-label="Navegação no celular">{[...links, ['Planeje sua estadia', '#reservas']].map(([name, href]) => <a key={href} href={href} onClick={close}>{name}</a>)}</nav>
    </dialog>
  </>;
}
