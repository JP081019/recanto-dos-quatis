'use client';
import { Icon } from './Icon';
export function ConsultLink({ id }: {id:string}) {
  return <a className="text-link dark-link" href="#reservas" onClick={()=>window.dispatchEvent(new CustomEvent('select-accommodation',{detail:id}))}>Consultar hospedagem <Icon name="arrow-up-right" /></a>;
}
