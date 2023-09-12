import { styled } from 'styled-components';

import { Paypal } from '@/components/Paypal';

const PaypalContainer = () => {
  return (
    <StPaypalWrapper>
      <Paypal />
    </StPaypalWrapper>
  );
};

export default PaypalContainer;

const StPaypalWrapper = styled.section``;
