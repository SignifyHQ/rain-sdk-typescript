// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Rain from '@rainapi/rain-sdk';

const client = new Rain({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource companies', () => {
  // Prism tests are disabled
  test.skip('retrieve', async () => {
    const responsePromise = client.companies.retrieve('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e');
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
    const responsePromise = client.companies.update('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e');
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
      client.companies.update(
        '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
        {
          address: {
            city: 'city',
            country: 'country',
            countryCode: 'xx',
            line1: 'line1',
            postalCode: 'postalCode',
            region: 'region',
            line2: 'line2',
          },
          name: 'name',
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Rain.NotFoundError);
  });

  // Prism tests are disabled
  test.skip('list', async () => {
    const responsePromise = client.companies.list();
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
      client.companies.list({ cursor: 'cursor', limit: 1 }, { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(Rain.NotFoundError);
  });

  // Prism tests are disabled
  test.skip('charge: only required params', async () => {
    const responsePromise = client.companies.charge('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {
      amount: 1,
      description: 'description',
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
  test.skip('charge: required and optional params', async () => {
    const response = await client.companies.charge('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {
      amount: 1,
      description: 'description',
    });
  });

  // Prism tests are disabled
  test.skip('createUser: only required params', async () => {
    const responsePromise = client.companies.createUser('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {
      email: 'email',
      firstName: 'firstName',
      isTermsOfServiceAccepted: true,
      lastName: 'lastName',
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
  test.skip('createUser: required and optional params', async () => {
    const response = await client.companies.createUser('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {
      email: 'email',
      firstName: 'firstName',
      isTermsOfServiceAccepted: true,
      lastName: 'lastName',
      address: {
        city: 'city',
        country: 'country',
        countryCode: 'xx',
        line1: 'line1',
        postalCode: 'postalCode',
        region: 'region',
        line2: 'line2',
      },
      birthDate: '2019-12-27',
      phoneCountryCode: 'phoneCountryCode',
      phoneNumber: 'phoneNumber',
      walletAddress: '0xE1CB97d8EBbDbaAae6d9B1ca0D1cFaADcCcbdaDa',
    });
  });

  // Prism tests are disabled
  test.skip('initiatePayment: only required params', async () => {
    const responsePromise = client.companies.initiatePayment('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {
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
  test.skip('initiatePayment: required and optional params', async () => {
    const response = await client.companies.initiatePayment('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {
      amount: 0,
      walletAddress: '0xE1CB97d8EBbDbaAae6d9B1ca0D1cFaADcCcbdaDa',
      chainId: 0,
    });
  });

  // Prism tests are disabled
  test.skip('retrieveBalances', async () => {
    const responsePromise = client.companies.retrieveBalances('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('retrieveContracts', async () => {
    const responsePromise = client.companies.retrieveContracts('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });
});
