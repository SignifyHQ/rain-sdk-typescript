// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { buildHeaders } from '../internal/headers';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class Keys extends APIResource {
  /**
   * This endpoint allows for the creation of a new key with a specified name and
   * expiration time. The key is used for various security operations within the
   * system.
   */
  create(body: KeyCreateParams, options?: RequestOptions): APIPromise<KeyCreateResponse> {
    return this._client.post('/keys', { body, ...options });
  }

  /**
   * This endpoint allows for the deletion of a specific key using its unique ID.
   */
  delete(keyID: string, options?: RequestOptions): APIPromise<void> {
    return this._client.delete(path`/keys/${keyID}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

/**
 * Represents a unique key used for issuing, typically used for authentication or
 * encryption purposes.
 */
export interface KeyCreateResponse {
  /**
   * The key's unique identifier
   */
  id: string;

  /**
   * The expiration date and time of the key
   */
  expiresAt: string;

  /**
   * The actual key used for the issuing process
   */
  key: string;

  /**
   * The name assigned to the key
   */
  name: string;
}

export interface KeyCreateParams {
  /**
   * The expiration timestamp of the key
   */
  expiresAt: string;

  /**
   * The name of the key being created
   */
  name: string;
}

export declare namespace Keys {
  export { type KeyCreateResponse as KeyCreateResponse, type KeyCreateParams as KeyCreateParams };
}
