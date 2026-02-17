// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Rain from '@rainapi/rain-sdk';

const client = new Rain({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource payments', () => {
  // Prism tests are disabled
  test.skip('initiate: only required params', async () => {
    const responsePromise = client.payments.initiate({
      amount: 0,
      walletAddress: '0xE1CB97d8EBbDbaAae6d9B1ca0D1cFaADcCcbdaDa',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('initiate: required and optional params', async () => {
    const response = await client.payments.initiate({
      amount: 0,
      walletAddress: '0xE1CB97d8EBbDbaAae6d9B1ca0D1cFaADcCcbdaDa',
      chainId: 0,
    });
  });
});
