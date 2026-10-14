'use client';
import { useEffect, useState, type FormEvent } from 'react';
import { accommodations, site } from '@/content/site';
import { Icon } from './Icon';
import { localToday, reservationMessage, validateReservation } from '@/lib/reservation.mjs';
export function Reservation() {
  const [error, setError] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState('');
  const [checkin, setCheckin] = useState('');
  const [accommodation,setAccommodation]=useState('any');
  useEffect(()=>{function select(event:Event){const id=(event as CustomEvent).detail;if(id==='01'||id==='02')setAccommodation(id);}window.addEventListener('select-accommodation',select);return()=>window.removeEventListener('select-accommodation',select);},[]);
  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault(); setStatus('');
    const data = new FormData(event.currentTarget);
    const values = { checkin: String(data.get('checkin')), checkout: String(data.get('checkout')), guests: String(data.get('guests')), accommodation:String(data.get('accommodation')) };
    const invalid = validateReservation(values);
    setError(invalid);
    if (invalid) { setMessage(''); return; }
    const text = reservationMessage(values);
    setMessage(text);
    if (/^\d{10,15}$/.test(site.whatsapp)) window.open(`https://wa.me/${site.whatsapp}?text=${encodeURIComponent(text)}`, '_blank', 'noopener,noreferrer');
  }
  async function copy() {
    try { await navigator.clipboard.writeText(message); setStatus('Mensagem copiada.'); }
    catch { setStatus('Selecione a mensagem abaixo para copiar.'); }
  }
  return <section className="reservation section" id="reservas">
    <div className="reservation-heading"><p className="eyebrow">Sua próxima pausa</p><h2>Reserve um tempo<br />para você.</h2><p>Escolha suas datas. O Recanto confirma as opções, a disponibilidade e os valores com você.</p></div>
    <form onSubmit={submit} className="reservation-form">
      <div className="date-fields"><label>Chegada<input name="checkin" type="date" required min={localToday()} value={checkin} onChange={e => setCheckin(e.target.value)} /></label><label>Saída<input name="checkout" type="date" required min={checkin || localToday()} /></label></div>
      <label>Hóspedes<input name="guests" type="number" min="1" max="99" defaultValue="2" required /></label>
      <label className="accommodation-field">Hospedagem desejada<select name="accommodation" required value={accommodation} onChange={e=>setAccommodation(e.target.value)}><option value="any">Quero conhecer as opções</option>{accommodations.map(a=><option key={a.id} value={a.id}>{a.name}</option>)}</select></label>
      <p className="form-error" role="alert">{error}</p>
      <button className="button" type="submit">Consultar disponibilidade <Icon name="whatsapp"/></button>
      <p className="form-note">{site.whatsapp ? 'A conversa continua no WhatsApp. Esta consulta não confirma uma reserva.' : 'Proposta em apresentação. O WhatsApp oficial ainda será confirmado; por enquanto, você pode preparar sua mensagem.'}</p>
      {message && !site.whatsapp ? <div className="message-preview"><label htmlFor="message">Sua consulta está pronta</label><textarea id="message" value={message} readOnly rows={10} /><button type="button" className="text-link" onClick={copy}>Copiar mensagem <Icon name="copy"/></button><p role="status">{status}</p></div> : null}
    </form>
  </section>;
}
