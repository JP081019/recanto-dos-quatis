export function localToday(date = new Date()) {
  return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}-${String(date.getDate()).padStart(2, '0')}`;
}
function validDate(value) {
  if (!/^\d{4}-\d{2}-\d{2}$/.test(value)) return false;
  const date = new Date(`${value}T12:00:00`);
  return !Number.isNaN(date.valueOf()) && localToday(date) === value;
}
export function validateReservation({ checkin, checkout, guests, accommodation = 'any' }, today = localToday()) {
  if (!validDate(checkin) || !validDate(checkout)) return 'Informe datas válidas de chegada e saída.';
  if (checkin < today) return 'A chegada deve ser hoje ou em uma data futura.';
  if (checkout <= checkin) return 'A saída deve acontecer depois da chegada.';
  if (!/^\d+$/.test(String(guests)) || Number(guests) < 1 || Number(guests) > 99) return 'Informe uma quantidade de hóspedes entre 1 e 99. A capacidade será confirmada pelo Recanto.';
  if (!['01','02','any'].includes(accommodation)) return 'Selecione uma hospedagem válida.';
  return '';
}
export function reservationMessage({ checkin, checkout, guests, accommodation = 'any' }) {
  const format = date => date.split('-').reverse().join('/');
  const name=accommodation==='any'?'Quero conhecer as opções':`Hospedagem ${accommodation}`;
  return `Olá! Gostaria de consultar uma hospedagem no Recanto dos Quatis.\n\nHospedagem: ${name}\nCheck-in: ${format(checkin)}\nCheck-out: ${format(checkout)}\nHóspedes: ${guests}\n\nPoderiam me informar a disponibilidade e os valores?`;
}
