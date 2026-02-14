// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import type { Rain } from '../client';

export abstract class APIResource {
  protected _client: Rain;

  constructor(client: Rain) {
    this._client = client;
  }
}
