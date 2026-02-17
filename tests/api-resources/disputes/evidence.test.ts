// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Rain, { toFile } from 'rainapi-sdk';

const client = new Rain({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource evidence', () => {
  // Prism tests are disabled
  test.skip('upload: only required params', async () => {
    const responsePromise = client.disputes.evidence.upload('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {
      evidence: await toFile(Buffer.from('# my file contents'), 'README.md'),
      name: 'name',
      type: 'type',
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
  test.skip('upload: required and optional params', async () => {
    const response = await client.disputes.evidence.upload('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {
      evidence: await toFile(Buffer.from('# my file contents'), 'README.md'),
      name: 'name',
      type: 'type',
    });
  });
});
