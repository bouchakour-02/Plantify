// client/src/components/StripeContainer.jsx
import React from 'react';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import CheckoutForm from './CheckoutForm';

const PUBLIC_KEY = 'pk_test_51Pz4CJRt9LIooHWJfm49NypWEtz7hSc48Hlwu1578S2ohN7cOydw2SCUW2uFJV6Qz5N2vffvQW0RSgfAP0MeqSUI00Pyp4xLAx'; // Replace with your Stripe public key
const stripePromise = loadStripe(PUBLIC_KEY);

const StripeContainer = () => {
  return (
    <Elements stripe={stripePromise}>
      <CheckoutForm />
    </Elements>
  );
};

export default StripeContainer;
