// server/routes/paymentRoutes.js
const express = require('express');
const Stripe = require('stripe');
const router = express.Router();

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY); // Load secret key from .env

router.post('/payment', async (req, res) => {
  const { amount, id } = req.body;

  try {
    const payment = await stripe.paymentIntents.create({
      amount,
      currency: 'usd',
      payment_method: id,
      confirm: true,
    });

    res.json({
      success: true,
      message: 'Payment successful!',
    });
  } catch (error) {
    console.error('Error in payment:', error);
    res.json({
      success: false,
      message: 'Payment failed',
    });
  }
});

module.exports = router;
