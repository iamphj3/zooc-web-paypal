import { styled } from 'styled-components';

import { Paypal } from '@/components/Paypal';
import { PayPalScriptProvider } from '@paypal/react-paypal-js';

import { setEnvironment } from '../../utils/paypal/index';

const initialOptions = {
  clientId: setEnvironment().clientId,
  currency: 'USD',
  intent: 'capture',
};

const PaypalContainer = () => {
  return (
    <StPaypalWrapper>
      <PayPalScriptProvider options={initialOptions}>
        <Paypal />
      </PayPalScriptProvider>
    </StPaypalWrapper>
  );
};

export default PaypalContainer;

const StPaypalWrapper = styled.section``;
