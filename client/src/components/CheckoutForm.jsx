// client/src/components/CheckoutForm.jsx
import React, { useState } from 'react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import axios from 'axios';

const CheckoutForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const [paymentStatus, setPaymentStatus] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const cardElement = elements.getElement(CardElement);
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card: cardElement,
    });

    if (error) {
      console.error(error);
    } else {
      const { id } = paymentMethod;
      try {
        const response = await axios.post('http://localhost:5000/payment', {
          amount: 1000, // Amount in cents ($10.00)
          id,
        });

        if (response.data.success) {
          setPaymentStatus('Payment successful!');
        }
      } catch (error) {
        console.error('Payment failed', error);
        setPaymentStatus('Payment failed!');
      }
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <CardElement />
      <button type="submit" disabled={!stripe}>
        Pay $10
      </button>
      <p>{paymentStatus}</p>
    </form>
  );
};

export default CheckoutForm;
