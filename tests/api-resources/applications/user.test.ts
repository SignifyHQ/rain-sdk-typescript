// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import RainHelloWorld, { toFile } from 'rain-hello-world';

const client = new RainHelloWorld({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource user', () => {
  // Prism tests are disabled
  test.skip('create: only required params', async () => {
    const responsePromise = client.applications.user.create({
      accountPurpose: 'accountPurpose',
      annualSalary: 'annualSalary',
      expectedMonthlyVolume: 'expectedMonthlyVolume',
      ipAddress: 'ipAddress',
      isTermsOfServiceAccepted: true,
      occupation: 'occupation',
      sumsubShareToken: 'sumsubShareToken',
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
  test.skip('create: required and optional params', async () => {
    const response = await client.applications.user.create({
      accountPurpose: 'accountPurpose',
      annualSalary: 'annualSalary',
      expectedMonthlyVolume: 'expectedMonthlyVolume',
      ipAddress: 'ipAddress',
      isTermsOfServiceAccepted: true,
      occupation: 'occupation',
      sumsubShareToken: 'sumsubShareToken',
      chainId: 'chainId',
      contractAddress: '0xE1CB97d8EBbDbaAae6d9B1ca0D1cFaADcCcbdaDa',
      hasExistingDocuments: true,
      solanaAddress: 'WRktL2iKFTHZg6qNBPzV1b1WLYwfnZ5JSHo2UV8L1R',
      sourceKey: 'x',
      walletAddress: '0xE1CB97d8EBbDbaAae6d9B1ca0D1cFaADcCcbdaDa',
    });
  });

  // Prism tests are disabled
  test.skip('retrieve', async () => {
    const responsePromise = client.applications.user.retrieve('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e');
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
    const responsePromise = client.applications.user.update('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e');
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
      client.applications.user.update(
        '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
        {
          accountPurpose: 'accountPurpose',
          address: {
            city: 'city',
            country: 'country',
            countryCode: 'xx',
            line1: 'line1',
            postalCode: 'postalCode',
            region: 'region',
            line2: 'line2',
          },
          annualSalary: 'annualSalary',
          birthDate: '2000-01-01',
          countryOfIssue: 'countryOfIssue',
          expectedMonthlyVolume: 'expectedMonthlyVolume',
          firstName: 'firstName',
          hasExistingDocuments: true,
          ipAddress: 'ipAddress',
          isTermsOfServiceAccepted: true,
          lastName: 'lastName',
          nationalId: 'nationalId',
          occupation: 'occupation',
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(RainHelloWorld.NotFoundError);
  });

  // Prism tests are disabled
  test.skip('initiate', async () => {
    const responsePromise = client.applications.user.initiate();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('initiate: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.applications.user.initiate(
        {
          email: 'email',
          firstName: 'firstName',
          lastName: 'lastName',
          walletAddress: '0xE1CB97d8EBbDbaAae6d9B1ca0D1cFaADcCcbdaDa',
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(RainHelloWorld.NotFoundError);
  });

  // Prism tests are disabled
  test.skip('reapply: only required params', async () => {
    const responsePromise = client.applications.user.reapply('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {
      accountPurpose: 'accountPurpose',
      address: {
        city: 'city',
        country: 'country',
        countryCode: 'xx',
        line1: 'line1',
        postalCode: 'postalCode',
        region: 'region',
      },
      annualSalary: 'annualSalary',
      birthDate: '2000-01-01',
      countryOfIssue: 'countryOfIssue',
      expectedMonthlyVolume: 'expectedMonthlyVolume',
      ipAddress: 'ipAddress',
      isTermsOfServiceAccepted: true,
      nationalId: 'nationalId',
      occupation: 'occupation',
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
  test.skip('reapply: required and optional params', async () => {
    const response = await client.applications.user.reapply('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {
      accountPurpose: 'accountPurpose',
      address: {
        city: 'city',
        country: 'country',
        countryCode: 'xx',
        line1: 'line1',
        postalCode: 'postalCode',
        region: 'region',
        line2: 'line2',
      },
      annualSalary: 'annualSalary',
      birthDate: '2000-01-01',
      countryOfIssue: 'countryOfIssue',
      expectedMonthlyVolume: 'expectedMonthlyVolume',
      ipAddress: 'ipAddress',
      isTermsOfServiceAccepted: true,
      nationalId: 'nationalId',
      occupation: 'occupation',
      hasExistingDocuments: true,
    });
  });

  // Prism tests are disabled
  test.skip('uploadDocument: only required params', async () => {
    const responsePromise = client.applications.user.uploadDocument('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {
      document: await toFile(Buffer.from('# my file contents'), 'README.md'),
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
  test.skip('uploadDocument: required and optional params', async () => {
    const response = await client.applications.user.uploadDocument('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {
      document: await toFile(Buffer.from('# my file contents'), 'README.md'),
      country: 'xxx',
      name: 'name',
      side: 'front',
      type: 'idCard',
    });
  });
});
