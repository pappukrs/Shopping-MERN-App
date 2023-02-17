// PaymentForm.js

import React, { useState } from 'react';

function PaymentForm(props) {
  const [cardNumber, setCardNumber] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvv, setCvv] = useState('');

  function handleSubmit(event) {
    event.preventDefault();
    props.onConfirm();
  }

  function handleCancel() {
    props.onCancel();
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="cardNumber">Card number:</label>
      <input
        type="text"
        id="cardNumber"
        value={cardNumber}
        onChange={(event) => setCardNumber(event.target.value)}
      />
      <br />
      <label htmlFor="expiryDate">Expiry date:</label>
      <input
        type="text"
        id="expiryDate"
        value={expiryDate}
        onChange={(event) => setExpiryDate(event.target.value)}
      />
      <br />
      <label htmlFor="cvv">CVV:</label>
      <input
        type="text"
        id="cvv"
        value={cvv}
        onChange={(event) => setCvv(event.target.value)}
      />
      <br />
      <button type="submit">Confirm</button>
      <button type="button" onClick={handleCancel}>
        Cancel
      </button>
    </form>
  );
}

export default PaymentForm;
