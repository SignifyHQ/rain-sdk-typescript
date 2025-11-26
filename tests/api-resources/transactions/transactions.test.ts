// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import RainHelloWorld from 'rain-hello-world';

const client = new RainHelloWorld({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource transactions', () => {
  // Prism tests are disabled
  test.skip('retrieve', async () => {
    const responsePromise = client.transactions.retrieve('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('update', async () => {
    const responsePromise = client.transactions.update('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('update: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.transactions.update(
        '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
        { memo: 'memo' },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(RainHelloWorld.NotFoundError);
  });

  // Prism tests are disabled
  test.skip('list', async () => {
    const responsePromise = client.transactions.list();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('list: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.transactions.list(
        {
          authorizedAfter: '2019-12-27T18:11:19.117Z',
          authorizedBefore: '2019-12-27T18:11:19.117Z',
          cardId: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
          companyId: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
          cursor: 'cursor',
          limit: 1,
          postedAfter: '2019-12-27T18:11:19.117Z',
          postedBefore: '2019-12-27T18:11:19.117Z',
          transactionHash: 'transactionHash',
          type: ['spend'],
          userId: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(RainHelloWorld.NotFoundError);
  });

  // Prism tests are disabled
  test.skip('createDispute', async () => {
    const responsePromise = client.transactions.createDispute('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('createDispute: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.transactions.createDispute(
        '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
        { textEvidence: 'textEvidence' },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(RainHelloWorld.NotFoundError);
  });
});
