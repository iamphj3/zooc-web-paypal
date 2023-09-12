/* eslint-disable no-console */
/* eslint-disable no-alert */
/* eslint-disable @typescript-eslint/no-shadow */
/* eslint-disable func-names */
/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { useEffect, useState } from 'react';
import { styled } from 'styled-components';

import { PayPalButtons, PayPalScriptProvider } from '@paypal/react-paypal-js';

import { setEnvironment } from '../../utils/paypal/index';

const initialOptions = {
  clientId: setEnvironment().clientId,
  currency: 'USD',
  intent: 'capture',
};

const Paypal = () => {
  const [show, setShow] = useState(false);
  const [success, setSuccess] = useState(false);
  const [, setErrorMessage] = useState('');
  const [orderID, setOrderID] = useState(false);

  // creates a paypal order
  const createOrder = (data, actions) => {
    return actions.order
      .create({
        purchase_units: [
          {
            description: 'Sunflower',
            amount: {
              currency_code: 'USD',
              value: 20,
            },
          },
        ],
      })
      .then((orderID) => {
        setOrderID(orderID);
        return orderID;
      });
  };

  // check Approval
  const onApprove = (data, actions) => {
    return actions.order.capture().then(function (details) {
      const { payer } = details;
      setSuccess(true);
    });
  };

  // capture likely error
  const onError = (data, actions) => {
    setErrorMessage('An Error occured with your payment ');
  };

  useEffect(() => {
    if (success) {
      alert('Payment successful!!');
      console.log('Order successful . Your order id is--', orderID);
    }
  }, [success, orderID]);

  return (
    <PayPalScriptProvider options={initialOptions}>
      <StProductWrapper>
        <img
          src="https://cdn.amondz.com/product/74065/resize/mainImg/PSI_781030.jpeg?v=1664882801855"
          alt="iPhone Case"
          height="320"
          width="300"
        />
        <h1>iPhone Case</h1>
        <p>$20</p>
        <p>Soooooo cute iPhone case~~!</p>
        <button className="buy-btn" type="submit" onClick={() => setShow(true)}>
          Buy now
        </button>
        <StPaypalWrapper>
          {show ? (
            <PayPalButtons
              style={{ layout: 'vertical' }}
              createOrder={createOrder}
              onApprove={onApprove}
            />
          ) : null}
        </StPaypalWrapper>
      </StProductWrapper>
    </PayPalScriptProvider>
  );
};

export default Paypal;

const StProductWrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;

  & > button {
    width: 10rem;
    height: 2rem;

    outline: none;
    border: none;
    border-radius: 0.5rem;
    color: white;
    background-color: #97d55c;

    cursor: pointer;
  }
`;

const StPaypalWrapper = styled.section`
  margin-top: 3rem;
  width: 20rem;
`;
