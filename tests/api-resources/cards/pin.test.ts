// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Rain from '@rainapi/rain-sdk';

const client = new Rain({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource pin', () => {
  // Prism tests are disabled
  test.skip('retrieve: only required params', async () => {
    const responsePromise = client.cards.pin.retrieve('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {
      SessionId: 'x',
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
  test.skip('retrieve: required and optional params', async () => {
    const response = await client.cards.pin.retrieve('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {
      SessionId: 'x',
    });
  });

  // Prism tests are disabled
  test.skip('update: only required params', async () => {
    const responsePromise = client.cards.pin.update('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {
      encryptedPin: { data: 'data', iv: 'iv' },
      SessionId: 'x',
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
  test.skip('update: required and optional params', async () => {
    const response = await client.cards.pin.update('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {
      encryptedPin: { data: 'data', iv: 'iv' },
      SessionId: 'x',
    });
  });
});
