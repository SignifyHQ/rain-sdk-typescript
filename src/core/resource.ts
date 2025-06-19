// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import type { RainHelloWorld } from '../client';

export abstract class APIResource {
  protected _client: RainHelloWorld;

  constructor(client: RainHelloWorld) {
    this._client = client;
  }
}
