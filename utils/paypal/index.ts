import checkoutNodeJssdk from '@paypal/checkout-server-sdk';

export const setEnvironment = () => {
  const clientId = process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID;
  const clientSecret = process.env.NEXT_PUBLIC_PAYPAL_CLIENT_SECRET;

  if (!clientId || !clientSecret) {
    throw new Error('PayPal client ID and client secret are not defined');
  }
  return { clientId, clientSecret };
};

export const configureEnvironment = () => {
  const { clientId, clientSecret } = setEnvironment();

  return process.env.NODE_ENV === 'production'
    ? new checkoutNodeJssdk.core.LiveEnvironment(clientId, clientSecret)
    : new checkoutNodeJssdk.core.SandboxEnvironment(clientId, clientSecret);
};

export const client = () => {
  return new checkoutNodeJssdk.core.PayPalHttpClient(configureEnvironment());
};
