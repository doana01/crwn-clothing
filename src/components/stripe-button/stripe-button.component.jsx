import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
   const priceForStripe = price * 100;
   const publishableKey = 'pk_test_51IlZbgDiO7W7s1XNp371kl4M9ZZ0IfV0aoh38WfvrOM86uSCIEpH3aBiawvNtXk3vA2osKYKp7T2VZmXbQMwGRxy00UNGtYZJg';

const onToken = token => {
    console.log(token);
    alert('Payment Successful');
}


return (
 <StripeCheckout
  label= 'Pay Now'
  name= 'CRWN Clothing Ltd.'
  billingAddress
  shippingAddress
  image='https://svgshare.com/i/CUz.svg'
  description={`Your total is $${price}`}
  amount={priceForStripe}
  panelLabel='Pay Now'
  token={onToken}
  stripeKey={publishableKey}
/>
);
};

export default StripeCheckoutButton;