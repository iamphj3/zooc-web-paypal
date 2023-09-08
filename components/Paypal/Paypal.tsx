import { styled } from 'styled-components';

import { PayPalButtons } from '@paypal/react-paypal-js';

const Paypal = () => {
  return (
    <StPaypalWrapper>
      <PayPalButtons style={{ layout: 'horizontal' }} />
    </StPaypalWrapper>
  );
};

export default Paypal;

const StPaypalWrapper = styled.section``;
