import React, { useState } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import StripeCheckout from '../../components/StripeCheckout';
import styles from './Checkout.module.css';

// load stripe outside of component to avoid rerenders
const promise = loadStripe(
  'pk_test_51JddMXH1CE7Sho3uGhyfFse8XCCbl4Kt84kExgHAjkZqdarXF2YfT8CG8xR0vJK7fkPYNr1f28Mb6qXxxKrPJ7SE00KRyP3AyD'
);

const Checkout = () => {
  const [amount, setAmount] = useState(60);

  return (
    <div>
      <h3>Review your order</h3>
      <div className={styles.orderLine}>
        <div className={styles.head}>Ticket Name</div>
        <div className={styles.head}>Quantity</div>
        <div className={styles.head}>Total Price</div>
      </div>
      <div className={styles.orderLine}>
        <div>
          Boys Junior Varsity Football vs. Linsly Junior Varsity Football
        </div>
        <div>1</div>
        <div>$6</div>
      </div>
      <div className={styles.orderLine}>
        <div>Processing fee</div>
        <div>1</div>
        <div>$0.52</div>
      </div>
      <hr />
      <div className={styles.contactSection}>
        <h3>Enter your contact information</h3>
        <form action="">
          <label>First name:</label>
          <input type="text" />
          <br />
          <label>Last name:</label>
          <input type="text" />
          <br />
          <label>Email:</label>
          <input type="text" />
          <br />
          <label>Confim email:</label>
          <input type="text" />
          <br />
          <label>Phone number:</label>
          <input type="text" />
        </form>
      </div>
      <div>
        <h3>Enter your payment information</h3>
        <Elements stripe={promise}>
          <StripeCheckout amount={amount} />
        </Elements>
      </div>
    </div>
  );
};

export default Checkout;
