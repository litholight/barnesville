import Stripe from 'stripe';
const stripe = new Stripe(
  'sk_test_51JddMXH1CE7Sho3uTv3BdrL2rr8zvNKfXLVOC39Tj4Lp28Uv5ACPxwMeVNOcJ7mALznb1TixD6JU7nLrhkzb1qYM007WXt6Vc5',
  {
    // https://github.com/stripe/stripe-node#configuration
    apiVersion: '2020-03-02',
  }
);

const handler = async (req, res) => {
  if (req.method === 'POST') {
    const { amount } = req.body;
    // Create a PaymentIntent with the order amount and currency
    const paymentIntent = await stripe.paymentIntents.create({
      amount: amount * 100,
      currency: 'usd',
    });

    res.send({
      clientSecret: paymentIntent.client_secret,
    });
  }
};

export default handler;
