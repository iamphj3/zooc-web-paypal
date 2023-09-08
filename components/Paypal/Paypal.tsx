import { styled } from 'styled-components';

import { PayPalButtons, PayPalScriptProvider } from '@paypal/react-paypal-js';

import { setEnvironment } from '../../utils/paypal/index';

const Paypal = () => {
  const { clientId } = setEnvironment();

  return (
    <StPaypalWrapper>
      <PayPalScriptProvider options={{ clientId }}>
        <PayPalButtons style={{ layout: 'horizontal' }} />
      </PayPalScriptProvider>
    </StPaypalWrapper>
  );
};

export default Paypal;

const StPaypalWrapper = styled.section``;
