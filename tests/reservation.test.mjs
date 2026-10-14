import { test } from 'node:test';
import assert from 'node:assert/strict';
import { validateReservation, reservationMessage } from '../src/lib/reservation.mjs';
const values = { checkin: '2026-10-20', checkout: '2026-10-23', guests: '2' };
test('valid inquiry and readable dates', () => { assert.equal(validateReservation(values, '2026-10-13'), ''); assert.match(reservationMessage(values), /20\/10\/2026/); });
test('reject past, impossible and reversed dates', () => {
  assert.ok(validateReservation({ ...values, checkin: '2026-10-12' }, '2026-10-13'));
  assert.ok(validateReservation({ ...values, checkin: '2026-02-30' }, '2026-01-01'));
  assert.ok(validateReservation({ ...values, checkout: values.checkin }, '2026-10-13'));
});
test('reject invalid guest values', () => { for (const guests of ['0', '-1', '2.5', 'NaN', '100']) assert.ok(validateReservation({ ...values, guests }, '2026-10-13')); });
test('validate accommodation and include selected lodging in inquiry',()=>{
  assert.ok(validateReservation({...values,accommodation:'99'},'2026-10-13'));
  assert.equal(validateReservation({...values,accommodation:'02'},'2026-10-13'),'');
  assert.match(reservationMessage({...values,accommodation:'02'}),/Hospedagem: Hospedagem 02/);
});
