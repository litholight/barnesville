import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import '../styles/globals.css';

const stripePromise = loadStripe(
  'pk_test_51JddMXH1CE7Sho3uGhyfFse8XCCbl4Kt84kExgHAjkZqdarXF2YfT8CG8xR0vJK7fkPYNr1f28Mb6qXxxKrPJ7SE00KRyP3AyD'
);

function MyApp({ Component, pageProps }) {
  return (
    <Elements stripe={stripePromise}>
      <Component {...pageProps} />
    </Elements>
  );
}

export default MyApp;
