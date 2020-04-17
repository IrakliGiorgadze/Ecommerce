import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishalbleKey = "pk_test_Dx1rmy7RboybPlp3K5h1hNaR00INKW82ri";

  const onToken = (token) => {
    alert("Payment Successful");
  };

  return (
    <StripeCheckout
      label="Pay Now"
      name="jarvis.ge"
      billingAddress
      shippingAddress
      image="data:image/jpeg;base64,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"
      description={`Your total is$${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishalbleKey}
    />
  );
};

export default StripeCheckoutButton;
