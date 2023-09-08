import { styled } from 'styled-components';

import { Paypal } from '@/components/Paypal';

const PaypalContainer = () => {
  return (
    <StPaypalContainer>
      <Paypal />
    </StPaypalContainer>
  );
};

export default PaypalContainer;

const StPaypalContainer = styled.main``;
