// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { type Uploadable } from '../../core/uploads';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { multipartFormRequestOptions } from '../../internal/uploads';
import { path } from '../../internal/utils/path';

export class Receipt extends APIResource {
  /**
   * This endpoint retrieves the receipt for a specific transaction. The receipt is
   * returned as a binary file, typically in PDF or similar format.
   */
  retrieve(transactionID: string, options?: RequestOptions): APIPromise<Response> {
    return this._client.get(path`/transactions/${transactionID}/receipt`, {
      ...options,
      headers: buildHeaders([{ Accept: 'application/octet-stream' }, options?.headers]),
      __binaryResponse: true,
    });
  }

  /**
   * This endpoint allows you to upload a receipt for a specific transaction. The
   * receipt is provided as a binary file, typically in PDF format.
   */
  upload(transactionID: string, body: ReceiptUploadParams, options?: RequestOptions): APIPromise<void> {
    return this._client.put(
      path`/transactions/${transactionID}/receipt`,
      multipartFormRequestOptions(
        { body, ...options, headers: buildHeaders([{ Accept: '*/*' }, options?.headers]) },
        this._client,
      ),
    );
  }
}

export interface ReceiptUploadParams {
  /**
   * The receipt file to upload, typically in PDF or other binary formats
   */
  receipt: Uploadable;
}

export declare namespace Receipt {
  export { type ReceiptUploadParams as ReceiptUploadParams };
}
