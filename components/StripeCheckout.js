import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { useStripe, useElements, CardElement } from '@stripe/react-stripe-js';
// import { toast } from 'react-toastify';
import { useRouter } from 'next/router';
// import { createPaymentIntent } from '../functions/stripe';
// import { sendAdminOrderNotification } from '../functions/email';

const StripeCheckout = ({ amount }) => {
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(null);
  const [processing, setProcessing] = useState('');
  const [disabled, setDisabled] = useState(true);

  const stripe = useStripe();
  const elements = useElements();

  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setProcessing(true);

    const { data } = await axios.post(`/api/create-payment-intent`, {
      amount,
    });

    const payload = await stripe.confirmCardPayment(data.clientSecret, {
      payment_method: {
        card: elements.getElement(CardElement),
        bill_details: {
          name: e.target.name.value,
        },
      },
    });

    if (payload.error) {
      setError(`Payment failed ${payload.error.message}`);
      setProcessing(false);
    } else {
      router.push('/');
    }
  };

  const handleChange = async (e) => {
    //  listen for changes in the card element
    setDisabled(e.empty);
    setError(e.error ? e.error.message : '');
  };
  const cartStyle = {
    style: {
      base: {
        color: '#32325d',
        fontFamily: 'Arial, sans-serif',
        fontSmoothing: 'antialiased',
        fontSize: '16px',
        '::placeholder': {
          color: '#32325d',
        },
      },
      invalid: {
        color: '#fa755a',
        iconColor: '#fa755a',
      },
    },
  };

  return (
    <>
      <p className={success ? 'result-message' : 'result-message hidden'}>
        Payment authorized
      </p>
      <form id="payment-form" className="stripe-form" onSubmit={handleSubmit}>
        <CardElement
          id="card-element"
          options={cartStyle}
          onChange={handleChange}
        />
        <button
          className="stripe-button"
          disabled={processing || disabled || success}
        >
          <span id="button-text">
            {processing ? <div className="spinner" id="spinner"></div> : 'Pay'}
          </span>
        </button>
        <br />
        {error && (
          <div className="card-error" role="alert">
            {error}
          </div>
        )}
      </form>
    </>
  );
};

export default StripeCheckout;
