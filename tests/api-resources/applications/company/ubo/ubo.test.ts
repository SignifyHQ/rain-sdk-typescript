// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Rain, { toFile } from 'rainapi-sdk';

const client = new Rain({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource ubo', () => {
  // Prism tests are disabled
  test.skip('update: only required params', async () => {
    const responsePromise = client.applications.company.ubo.update('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {
      companyId: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
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
    const response = await client.applications.company.ubo.update('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {
      companyId: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      address: {
        city: 'city',
        country: 'country',
        countryCode: 'xx',
        line1: 'line1',
        postalCode: 'postalCode',
        region: 'region',
        line2: 'line2',
      },
      birthDate: '2000-01-01',
      countryOfIssue: 'countryOfIssue',
      email: 'dev@stainless.com',
      firstName: 'firstName',
      lastName: 'lastName',
      nationalId: 'nationalId',
    });
  });

  // Prism tests are disabled
  test.skip('uploadDocument: only required params', async () => {
    const responsePromise = client.applications.company.ubo.uploadDocument(
      '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      { document: await toFile(Buffer.from('# my file contents'), 'README.md'), email: 'email' },
    );
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
    const response = await client.applications.company.ubo.uploadDocument(
      '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      {
        document: await toFile(Buffer.from('# my file contents'), 'README.md'),
        email: 'email',
        country: 'xxx',
        side: 'front',
        type: 'idCard',
      },
    );
  });
});
